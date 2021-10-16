import React from "react";
import ReactDOM from "react-dom";
import ArnabDattaPortfolio from "./ArnabDattaPortfolio";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // two types of router  BrowserRouter and  HashRouter

  // <BrowserRouter>
  // <App />
  // </BrowserRouter>,
  <ArnabDattaPortfolio />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
