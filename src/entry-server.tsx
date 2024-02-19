import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <div>hihi</div>
    </React.StrictMode>
  );
  return { html };
}
