import { useState } from "react";

import TodoList from "../components/Todo/TodoList";
import AddNewTodo from "../components/Todo/AddNewTodo";

const Todo: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleErrorMessage = (message: string): void => {
    setErrorMessage(message);
  };

  return (
    <div className="mt-10 relative py-20 px-4 max-w-6xl mx-auto flex flex-col gap-20 items-center lg:shadow-lg rounded-lg bg-slate-50">
      {errorMessage && (
        <small className="absolute top-40 left-8  md:left-16 lg:left-48 xl:left-64 text-red-500 tracking-wider">
          {errorMessage}
        </small>
      )}
      <AddNewTodo handleErrorMessage={handleErrorMessage} />
      <div className="w-full">
        <ul className="flex flex-col lg:grid md:grid-cols-2 gap-4">
          <TodoList />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
