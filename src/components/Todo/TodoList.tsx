import { useState } from "react";

import TodoIcons from "./TodoIcons";

interface TodoListProps {
  todos: { todo: string; id: number; isComplete: boolean }[];
  deleteTodo: (todo: string, id: number, isComplete: boolean) => void;
  editTodo: (todo: string, id: number, isComplete: boolean) => void;
  completeTodo: (todo: string, id: number, isComplete: boolean) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  editTodo,
  completeTodo,
}) => {
  const [todoName, setTodoName] = useState<string>("");
  const [deleteTodoName, setDeleteTodoName] = useState<string>("");
  const [editTodoName, setEditTodoName] = useState<string>("");

  const handleCompleteTodo = (
    todo: string,
    id: number,
    isComplete: boolean
  ) => {
    setTodoName(todo);
    completeTodo(todo, id, isComplete);
    setDeleteTodoName("");
  };

  const handleDeleteTodo = (todo: string, id: number, isComplete: boolean) => {
    setDeleteTodoName(todo);
    deleteTodo(todo, id, isComplete);
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
              className={`text-xl lg:text-2xl tracking-wide truncate ${complete} ${trash}`}
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
