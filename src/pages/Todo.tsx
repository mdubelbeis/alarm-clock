import { useState } from "react";
import Icons from "../components/ui/Icons";
import IconsList from "../components/ui/IconsList";

const TODOS = [
  { id: Math.random(), todo: "Meta Certificate", isComplete: false },
  { id: Math.random(), todo: "Build Projects", isComplete: false },
  { id: Math.random(), todo: "Apply for jobs", isComplete: false },
  { id: Math.random(), todo: "Study", isComplete: false },
];

const Todo: React.FC = () => {
  const [todos, setTodos] = useState(TODOS);

  const handleBTN = (iconName: string) => {
    switch (iconName) {
      case "trashIcon":
        deleteTodo();
        break;
      case "editIcon":
        editTodo();
        break;
      case "completeIcon":
        completeTodo();
        break;
      default:
        console.log("idk what that is ");
    }
  };

  const deleteTodo = () => {};

  const editTodo = () => {};

  const completeTodo = () => {};

  const todoList = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="flex flex-col md:flex-row justify-between w-full mx-auto gap-6 bg-white m-2 items-center p-4 rounded-2xl shadow-lg py-4 hover:bg-slate-100"
      >
        <h3 className="text-xl lg:text-2xl tracking-wide">{todo.todo}</h3>
        <div>
          <ul className="flex gap-12 lg:gap-8">
            <IconsList />
          </ul>
        </div>
      </li>
    );
  });

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
          {todoList}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
