import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "regenerator-runtime/runtime";

import { App } from "./App.js";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// REMOVED THE FOLLOWING:

// class App extends React.PureComponent {
//   render() {
//     return <h1>Hello World!</h1>;
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));
