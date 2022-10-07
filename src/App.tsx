import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/ui/Header";

const App = () => {
  return (
    <div className="flex flex-col justify-between relative w-full max-w-6xl mx-auto">
      <Header />
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
