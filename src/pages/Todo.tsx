import { useState } from "react";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, logTodo } from "../app/Todo/TodoSlice";

import TodoList from "../components/Todo/TodoList";
import InputForm from "../components/Todo/InputForm";

const Todo: React.FC = () => {
  // Passed Down edit info for some dynamic data for user to see on todo
  const [editCount, setEditCount] = useState(0);
  // const [todos, setTodos] = useState(TODOS);
  const todos = useSelector((state: RootState) => state.addTodo.todoList);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const handleNewTodo = (newTodo: string): void => {
    if (newTodo.length > 0) {
      dispatch(
        addTodo([
          { id: Math.random(), todo: newTodo, isComplete: false },
          ...todos,
        ])
      );
      setErrorMessage("");
    } else {
      setErrorMessage("A Todo must have at least one character...");
    }
    return;
  };

  const handleCompletedTodo = (
    name: string,
    id: number,
    isComplete: boolean
  ): void => {
    const filteredTodos = todos.filter((todo) => todo.todo !== name);
    setTimeout(() => {
      dispatch(deleteTodo(filteredTodos));
    }, 500);
  };

  const handleDeleteTodo = (
    todo: string,
    id: number,
    isComplete: boolean
  ): void => {
    const filteredTodos = todos.filter((task) => task.todo !== todo);
    setTimeout(() => {
      dispatch(deleteTodo(filteredTodos));
    }, 500);
  };

  const handleEditTodo = (todo: string, id: number, isComplete: boolean) => {
    const filteredTodos = todos.filter((task) => task.id === id);
    // setEditCount((prevEditCount) => prevEditCount + 1);
    // console.log(editCount);
  };

  return (
    <div className="mt-10 relative py-20 px-4 max-w-6xl mx-auto flex flex-col gap-20 items-center lg:shadow-lg rounded-lg bg-slate-50">
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
            deleteTodo={handleDeleteTodo}
            editTodo={handleEditTodo}
            completeTodo={handleCompletedTodo}
          />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
