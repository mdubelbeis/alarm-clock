import Clock from "./components/Clock/Time";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <Menu />
      <Clock />
    </main>
  );
};

export default App;
