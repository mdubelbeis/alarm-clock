import { useState } from "react";
import Icons from "../components/ui/Icons";

const TODOS = [
  { id: Math.random(), todo: "Meta Certificate", isComplete: false },
  { id: Math.random(), todo: "Build Projects", isComplete: false },
  { id: Math.random(), todo: "Apply for jobs", isComplete: false },
  { id: Math.random(), todo: "Study", isComplete: false },
];

const ICONS = [
  {
    id: 1,
    name: "trashIcon",
    d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0",
    width: "w-6",
  },
  {
    id: 2,
    name: "editIcon",
    d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    width: "w-6",
  },
  {
    id: 3,
    name: "completeIcon",
    d: "M4.5 12.75l6 6 9-13.5",
    width: "w-6",
  },
];

const Todo: React.FC = () => {
  const [todos, setTodos] = useState(TODOS);

  const icons = ICONS.map((icon) => {
    return (
      <li key={icon.id} className="hover:cursor-pointer">
        <Icons width={icon.width} d={icon.d} id={icon.name} />
      </li>
    );
  });

  const todoList = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="flex flex-col lg:flex-row xl:flex-col justify-between w-full gap-6 bg-white m-2 items-center p-4 rounded-2xl shadow-lg py-4 hover:bg-slate-100"
      >
        <h3 className="text-xl tracking-wide">{todo.todo}</h3>
        <div className="pt-6 md:pt-6 lg:pt-0">
          <ul className="flex gap-10">{icons}</ul>
        </div>
      </li>
    );
  });

  return (
    <div className="p-4 max-w-6xl mx-auto flex flex-col gap-20 items-center mt-20">
      <form className="w-full">
        <label>
          <input
            className="w-full md:w-full py-4 px-4 text-lg bg-white focus:outline-blue-500 rounded-2xl shadow-lg"
            type="text"
            autoFocus
            placeholder="Add new task"
          />
        </label>
      </form>
      <div className="w-full">
        <ul className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
          {todoList}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
