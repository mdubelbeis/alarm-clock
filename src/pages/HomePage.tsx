import React from "react";
import About from "./About";

const HomePage: React.FC = () => {
  // ! USER LOGIN / AUTH
  return (
    <div>
      <p>HomePAGE</p>
      <About />
      <div>
        <details className="bg-white shadow-xl py-4 px-4 text-2xl">
          <summary>Lorem Ipsum</summary>
          <p className="text-lg tracking-wider p-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            eos quod fugiat quasi repudiandae, minus quae facere. Sed, quia?
            Quod cupiditate asperiores neque iste consectetur tempore eum
            repellat incidunt qui.
          </p>
        </details>
      </div>
    </div>
  );
};

export default HomePage;
