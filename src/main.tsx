import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Clock from "./pages/Clock/Clock";
import Timer from "./pages/Clock/Timer";
import StopWatch from "./pages/Clock/StopWatch";
import Home from "./components/Home/HomeNav";
import Todo from "./pages/Todo";
import Notes from "./pages/Notes";
import HomeNav from "./components/Home/HomeNav";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/menu" element={<HomeNav />} />
      <Route path="/clock" element={<Clock />}>
        <Route path="clock/stop-watch" element={<StopWatch />} />
        <Route path="clock/timer" element={<Timer />} />
      </Route>
      <Route path="/todo" element={<Todo />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  </BrowserRouter>
);
