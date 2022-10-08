import TodoList from "../components/Todo/TodoList";

const Todo: React.FC = () => {
  return (
    <div className="py-20 px-10 max-w-6xl mx-auto flex flex-col gap-20 items-center lg:shadow-lg rounded-lg bg-slate-50">
      <form className="relative w-11/12 max-w-2xl">
        <label>
          <input
            className="w-full p-4 text-lg bg-white focus:outline-blue-500 rounded-2xl shadow-lg"
            type="text"
            autoFocus
            placeholder="Add new task"
          />
        </label>
        <button className="absolute py-2 px-4 top-[0.55rem] tracking-wider right-2 rounded-xl bg-blue-500 shadow-lg hover:bg-slate-50 hover:text-blue-500 text-white">
          ADD
        </button>
      </form>
      <div className="w-full">
        <ul className="flex flex-col lg:grid md:grid-cols-2 gap-4">
          <TodoList />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
