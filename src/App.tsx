import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/ui/Header";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
