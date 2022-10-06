import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";

const App = () => {
  return (
    <div className="flex flex-col justify-around items-center h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
