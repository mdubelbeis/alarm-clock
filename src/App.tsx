import HomeNav from "./components/Home/HomeNav";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <header>
        <div>MULTI-TOOL</div>
        <div>
          <HomeNav />
        </div>
      </header>
    </div>
  );
};

export default App;
