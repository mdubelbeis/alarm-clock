import { useState } from "react";

import TodoList from "../components/Todo/TodoList";
import InputForm from "../components/ui/InputForm";

const TODOS = [
  { id: Math.random(), todo: "Meta Certificate", isComplete: false },
  { id: Math.random(), todo: "Build Projects", isComplete: false },
  { id: Math.random(), todo: "Apply for jobs", isComplete: false },
  { id: Math.random(), todo: "Study", isComplete: false },
];

const Todo: React.FC = () => {
  // Passed Down edit info for some dynamic data for user to see on todo
  const [editCount, setEditCount] = useState(0);
  const [todos, setTodos] = useState(TODOS);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNewTodo = (newTodo: string) => {
    if (newTodo.length > 0) {
      setTodos([
        { id: Math.random(), todo: newTodo, isComplete: false },
        ...todos,
      ]);
      setErrorMessage("");
    } else {
      setErrorMessage("A Todo must have at least one character...");
    }
    return;
  };

  const handleCompletedTodo = (name: string) => {
    const filteredTodos = todos.filter((todo) => todo.todo !== name);
    // Delay removal (setTimeout(() => {}, 2000)) on Click....
    setTimeout(() => {
      setTodos(filteredTodos);
    }, 2000);

    // Strikethrough Text
    // Flash good job!
    // Remove todo
  };

  const deleteTodo = (todo: string) => {
    const filteredTodos = todos.filter((task) => task.todo !== todo);
    setTodos(filteredTodos);
  };

  const editTodo = () => {};

  return (
    <div className="mt-10 relative py-20 px-10 max-w-6xl mx-auto flex flex-col gap-20 items-center lg:shadow-lg rounded-lg bg-slate-50">
      {errorMessage && (
        <small className="absolute top-40 left-14 md:left-20 lg:left-48 xl:left-64 text-red-500 tracking-wider">
          {errorMessage}
        </small>
      )}
      <InputForm handleNewTodo={handleNewTodo} />
      <div className="w-full">
        <ul className="flex flex-col lg:grid md:grid-cols-2 gap-4">
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            completeTodo={handleCompletedTodo}
          />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
