import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/ui/Header";

const App = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
