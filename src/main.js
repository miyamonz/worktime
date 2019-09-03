import React from "react";
import { render } from "react-dom";
import { Provider } from "./store";
import App from "./App";

render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector("#main")
);
