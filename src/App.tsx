import Clock from "./components/Clock";
import HomeMenu from "./pages/HomeMenu";

const App = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <HomeMenu />
      <Clock />
    </main>
  );
};

export default App;
