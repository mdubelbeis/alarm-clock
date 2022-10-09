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
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState(TODOS);

  const handleNewTodo = (newTodo: string) => {
    setTodos([
      { id: Math.random(), todo: newTodo, isComplete: false },
      ...todos,
    ]);
  };

  const deleteTodo = (todo: string) => {
    const filteredTodos = todos.filter((task) => task.todo !== todo);

    setTodos(filteredTodos);
  };

  return (
    <div className="py-20 px-10 max-w-6xl mx-auto flex flex-col gap-20 items-center lg:shadow-lg rounded-lg bg-slate-50">
      <InputForm handleNewTodo={handleNewTodo} />
      <div className="w-full">
        <ul className="flex flex-col lg:grid md:grid-cols-2 gap-4">
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
