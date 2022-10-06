import HomeNav from "./components/Home/HomeNav";

const App = () => {
  return (
    <div className="flex flex-col justify-around items-center h-screen">
      <header>
        <div className="font-mono text-4xl">MULTI-TOOL</div>
      </header>
      <section>
        <HomeNav />
      </section>
    </div>
  );
};

export default App;
