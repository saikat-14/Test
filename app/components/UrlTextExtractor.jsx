import React, { useState } from "react";

export default function UrlTextExtractor() {
  const [url, setUrl] = useState("");
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTextFromUrl = async () => {
    if (!url) return alert("Please enter a valid URL");
    setLoading(true);
    setExtractedText("");
    try {
      // Use public CORS proxy (for demo). Replace or remove proxy in production.
      const proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);
      const response = await fetch(proxy);
      const result = await response.json();
      const htmlString = result.contents;

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");

      function getVisibleText(element) {
        let output = "";
        for (const node of element.childNodes) {
          if (node.nodeType === 3) {
            output += node.nodeValue.trim() + " ";
          } else if (
            node.nodeType === 1 &&
            !["SCRIPT", "STYLE", "NOSCRIPT", "SVG"].includes(node.nodeName)
          ) {
            output += getVisibleText(node);
          }
        }
        return output;
      }

      const bodyText = getVisibleText(doc.body).replace(/\s+/g, " ").trim();

      setExtractedText(bodyText);
    } catch (err) {
      setExtractedText("Failed to extract text from URL: " + err.message);
    }
    setLoading(false);
  };

  const readAloud = () => {
    if (!extractedText) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(extractedText.slice(0, 15000));
    utterance.rate = 1.05;
    window.speechSynthesis.speak(utterance);
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <section>
      <h2>Enter a Webpage URL to Convert</h2>
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <div>
        <button onClick={fetchTextFromUrl} disabled={loading}>
          Fetch Text
        </button>
        <button onClick={readAloud} disabled={!extractedText}>
          🔊 Read Aloud
        </button>
        <button onClick={stopReading}>⏹️ Stop</button>
      </div>

      <div className="output-area" aria-live="polite">
        {loading ? "Fetching webpage text..." : extractedText || "No text extracted yet."}
      </div>
    </section>
  );
}
