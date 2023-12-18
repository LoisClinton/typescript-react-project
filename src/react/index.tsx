import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "regenerator-runtime/runtime";

import { App } from "./App.js";

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
