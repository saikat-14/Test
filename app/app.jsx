import React from "react";
import FileTextExtractor from "./components/FileTextExtractor";
import UrlTextExtractor from "./components/UrlTextExtractor";

export default function App() {
  return (
    <div className="container" role="main">
      <h1>Welcome to DyslexiaText</h1>
      <p>
        Transform normal written text into dyslexia-friendly format with improved readability,
        better spacing, and accessibility features designed for readers with dyslexia.
      </p>

      <FileTextExtractor />

      <hr />

      <UrlTextExtractor />
    </div>
  );
}
