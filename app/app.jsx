import React from "react";
import FileTextExtractor from "./components/FileTextExtractor";
import UrlTextExtractor from "./components/UrlTextExtractor";
import TextConverter from "./components/TextConverter";

export default function App() {
  return (
    <main className="container" role="main">
      <h1>Welcome to DyslexiaText</h1>
      <p>
        Transform normal written text into dyslexia-friendly format with improved readability,
        better spacing, and accessibility features designed for readers with dyslexia.
      </p>

      <TextConverter />
      <FileTextExtractor />
      <hr />
      <UrlTextExtractor />
    </main>
  );
}
