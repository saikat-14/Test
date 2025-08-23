import React, { useState, ChangeEvent } from "react";
import { parseFile } from "../components/fileParsing";

export default function FileTextExtractor() {
  const [extractedText, setExtractedText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const text = await parseFile(file);
      setExtractedText(text);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setExtractedText("Error reading file: " + err.message);
      } else {
        setExtractedText("Unknown error occurred while reading file.");
      }
    }
    setLoading(false);
  };

  const readAloud = () => {
    if (!extractedText) return;
    window.speechSynthesis.cancel();

    // limit to 15k characters (SpeechSynthesis can choke on very large text)
    const utterance = new SpeechSynthesisUtterance(extractedText.slice(0, 15000));
    utterance.rate = 1.05;
    window.speechSynthesis.speak(utterance);
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <section>
      <h2>Upload your file (TXT, DOC, DOCX, PDF, RTF)</h2>
      <input
        type="file"
        accept=".txt,.rtf,.doc,.docx,.pdf"
        onChange={onFileChange}
        disabled={loading}
      />

      <div>
        <button onClick={readAloud} disabled={!extractedText}>
          🔊 Read Aloud
        </button>
        <button onClick={stopReading}>⏹️ Stop</button>
      </div>

      <div className="output-area" aria-live="polite">
        {loading
          ? "Loading file and extracting text..."
          : extractedText || "No text extracted yet."}
      </div>
    </section>
  );
}
