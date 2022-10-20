import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { todoActions } from "../../app/Todo/TodoSlice";

import TodoIcons from "./TodoIcons";

const TodoList: React.FC = () => {
  const [todoName, setTodoName] = useState<string>("");
  const [deleteTodoName, setDeleteTodoName] = useState<string>("");
  const [editTodoName, setEditTodoName] = useState<string>("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoStore.todoList);

  const handleCompleteTodo = (
    name: string,
    id: number,
    isComplete: boolean
  ) => {
    const filteredTodos = todos.filter((todo) => todo.todo !== name);
    setTimeout(() => {
      dispatch(todoActions.deleteTodo(filteredTodos));
    }, 500);
    setTodoName(name);
    setDeleteTodoName("");
  };

  const handleDeleteTodo = (todo: string, id: number, isComplete: boolean) => {
    const filteredTodos = todos.filter((task) => task.todo !== todo);
    setTimeout(() => {
      dispatch(todoActions.deleteTodo(filteredTodos));
    }, 500);
    setDeleteTodoName(todo);
    setTodoName("");
  };

  const handleEditTodo = (
    todo: string,
    id: number,
    isComplete: boolean
  ): void => {
    setEditTodoName(todo);
  };

  return (
    <>
      {todos.map((todo) => {
        let complete =
          todo.todo === todoName ? "line-through text-green-500" : "";
        let trash =
          todo.todo === deleteTodoName ? "line-through text-red-500" : "";

        return (
          <li
            key={todo.id}
            className={`flex flex-col md:flex-row justify-between w-full mx-auto gap-6 bg-white m-2 items-center p-4 rounded-2xl shadow-lg py-4 hover:bg-slate-100`}
          >
            <h3
              className={`w-full text-xl lg:text-2xl tracking-wide ${complete} ${trash} truncate`}
            >
              {todo.todo}
            </h3>
            <div>
              <ul className="flex gap-12 lg:gap-8">
                <TodoIcons
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleCompleteTodo={handleCompleteTodo}
                  handleEditTodo={handleEditTodo}
                />
              </ul>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
