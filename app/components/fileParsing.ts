import mammoth from "mammoth";
import { getDocument, GlobalWorkerOptions, PDFDocumentProxy } from "pdfjs-dist";

// Required for PDF.js worker
GlobalWorkerOptions.workerSrc =
  "//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.js";

export async function parseFile(file: File): Promise<string> {
  const fileType = file.type;

  // Handle plain text
  if (fileType === "text/plain") {
    return await file.text();
  }

  // Handle PDF
  if (fileType === "application/pdf") {
    const arrayBuffer = await file.arrayBuffer();
    const pdf: PDFDocumentProxy = await getDocument({ data: arrayBuffer }).promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map((item: any) => item.str);
      fullText += strings.join(" ") + "\n\n";
    }

    return fullText;
  }

  // Handle DOCX / DOC
  if (
    fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    fileType === "application/msword"
  ) {
    const arrayBuffer = await file.arrayBuffer();
    const { value: text } = await mammoth.extractRawText({ arrayBuffer });
    return text;
  }

  // Handle RTF
  if (fileType === "application/rtf" || file.name.endsWith(".rtf")) {
    return await file.text();
  }

  // Fallback
  return await file.text();
}
