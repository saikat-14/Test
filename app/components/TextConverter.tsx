"use client";
import { useState } from "react";
import { parseFile } from "./fileParsing";

export default function TextConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);
    const text = await parseFile(uploadedFile);
    setContent(text);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Convert Your Content</h2>

      <input
        type="file"
        accept=".txt,.doc,.docx,.pdf,.rtf"
        onChange={handleFileChange}
        className="mb-4"
      />

      {content && (
        <div
          className="mt-6 p-4 rounded-lg border bg-white dark:bg-slate-800"
          style={{
            fontFamily: "OpenDyslexic, Arial, sans-serif",
            lineHeight: "1.8",
            letterSpacing: "0.05em",
            fontSize: "18px",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}
