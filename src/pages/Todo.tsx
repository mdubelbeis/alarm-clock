import { useState } from "react";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";

import TodoList from "../components/Todo/TodoList";
import InputForm from "../components/Todo/InputForm";

const Todo: React.FC = () => {
  // Passed Down edit info for some dynamic data for user to see on todo
  const [editCount, setEditCount] = useState(0);
  // const [todos, setTodos] = useState(TODOS);
  const todos = useSelector((state: RootState) => state.todoStore.todoList);
  const dispatch = useDispatch();
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
      <InputForm handleErrorMessage={handleErrorMessage} />
      <div className="w-full">
        <ul className="flex flex-col lg:grid md:grid-cols-2 gap-4">
          <TodoList />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
