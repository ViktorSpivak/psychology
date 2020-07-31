import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/sessionRedux";
import { BrowserRouter, Route } from "react-router-dom";
import { App } from "../components/app/App";

export const Root = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
