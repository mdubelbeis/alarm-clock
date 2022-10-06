import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/ui/Header";

const App = () => {
  return (
    <div className="flex flex-col justify-around items-center h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
