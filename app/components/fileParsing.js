import mammoth from "mammoth";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.js";

export async function parseFile(file) {
  const fileType = file.type;

  if (fileType === "text/plain") {
    return await file.text();
  }

  if (fileType === "application/pdf") {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await getDocument({ data: arrayBuffer }).promise;
    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map((item) => item.str);
      fullText += strings.join(" ") + "\n\n";
    }
    return fullText;
  }

  if (
    fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    fileType === "application/msword"
  ) {
    const arrayBuffer = await file.arrayBuffer();
    const { value: text } = await mammoth.extractRawText({ arrayBuffer });
    return text;
  }

  if (fileType === "application/rtf" || file.name.endsWith(".rtf")) {
    // Basic RTF fallback: return raw text content
    return await file.text();
  }

  return await file.text();
}
