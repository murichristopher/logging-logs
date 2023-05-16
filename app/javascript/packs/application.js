import "@hotwired/turbo-rails";
import "../controllers";
import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App.jsx";
import { createRoot } from "react-dom/client";

document.addEventListener("turbo:load", () => {
  const reactWrapper = document.getElementById("react-wrapper");

  if (reactWrapper) {
    const root = createRoot(reactWrapper);

    root.render(<App />);
  }
});
