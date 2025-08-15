import mammoth from "mammoth";
import { pdfjs } from "pdfjs-dist/build/pdf";
import rtfToText from "rtf.js"; // hypothetical or alternative library

pdfjs.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.js";

export async function parseFile(file) {
  const fileType = file.type;

  if (fileType === "text/plain") {
    // TXT
    return await file.text();
  }
  
  if (fileType === "application/pdf") {
    // PDF parsing using pdf.js
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str);
      fullText += strings.join(" ") + "\n\n";
    }
    return fullText;
  }

  if (
    fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    fileType === "application/msword"
  ) {
    // DOC or DOCX using Mammoth
    const arrayBuffer = await file.arrayBuffer();
    const { value: text } = await mammoth.extractRawText({ arrayBuffer });
    return text;
  }

  if (fileType === "application/rtf" || file.name.endsWith(".rtf")) {
    // RTF parsing - example (you need a suitable RTF lib or custom parser)
    const rtfText = await file.text();
    // You can use rtf.js or another lib here to convert to plain text
    // const plainText = convertRTFtoText(rtfText);
    const plainText = rtfText; // placeholder fallback
    return plainText;
  }

  // Default fallback
  return await file.text();
}
