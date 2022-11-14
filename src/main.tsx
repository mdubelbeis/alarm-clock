import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import "./index.css";

import App from "./App";
import HomePage from "./pages/HomePage";
import Clock from "./pages/Clock/Clock";
import StopWatch from "./pages/Clock/StopWatch";
import Timer from "./pages/Clock/Timer";
import Todo from "./pages/Todo";
import Notes from "./pages/Notes";
import Calculator from "./pages/Calculator";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="clock/stop-watch" element={<StopWatch />} />
            <Route path="clock/timer" element={<Timer />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/calculator" element={<Calculator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
