import React from "react";

const HomePage: React.FC = () => {
  // ! USER LOGIN / AUTH
  return (
    <section className="mt-10 w-full p-10 shadow-lg bg-slate-50 flex flex-col gap-10">
      <div className="border-b-2 text-center border-slate-100 w-full max-w-xl mx-auto">
        <h1 className="text-2xl p-4">ABOUT</h1>
      </div>
      <div className="max-w-xl mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eius
          illo animi autem, ipsa fugit facilis similique excepturi commodi in
          iure nostrum totam atque. Sint voluptas omnis adipisci enim cum
          excepturi ex, ab, nam eos cupiditate aspernatur. Distinctio, molestias
          magni provident sint doloribus repudiandae ducimus obcaecati voluptas
        </p>
      </div>
    </section>
  );
};

export default HomePage;
