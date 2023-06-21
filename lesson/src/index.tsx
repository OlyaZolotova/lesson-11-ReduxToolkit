import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

// Redux
// npm i redux
// npm i react-redux
// npm i @types/react-redux
// Redux (Redux Toolkit), Mobx, Recoil, Zustand

// Store, Action, Reducer

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
