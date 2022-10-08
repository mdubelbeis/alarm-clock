import { useState } from "react";

import IconsList from "../ui/IconsList";

const TODOS = [
  { id: Math.random(), todo: "Meta Certificate", isComplete: false },
  { id: Math.random(), todo: "Build Projects", isComplete: false },
  { id: Math.random(), todo: "Apply for jobs", isComplete: false },
  { id: Math.random(), todo: "Study", isComplete: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(TODOS);

  return (
    <>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="flex flex-col md:flex-row justify-between w-full mx-auto gap-6 bg-white m-2 items-center p-4 rounded-2xl shadow-lg py-4 hover:bg-slate-100"
          >
            <h3 className="text-xl lg:text-2xl tracking-wide">{todo.todo}</h3>
            <div>
              <ul className="flex gap-12 lg:gap-8">
                <IconsList todo={todo} />
              </ul>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
