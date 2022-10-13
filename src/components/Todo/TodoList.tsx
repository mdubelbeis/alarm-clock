import { useState } from "react";

import TodoIcons from "./TodoIcons";

interface TodoListProps {
  todos: { id: number; todo: string; isComplete: boolean }[];
  deleteTodo: (todo: string) => void;
  editTodo: () => void;
  completeTodo: (todo: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  editTodo,
  completeTodo,
}) => {
  const [todoName, setTodoName] = useState<string>("");
  const [deleteTodoName, setDeleteTodoName] = useState<string>("");

  const handleCompleteTodo = (todo: string) => {
    setTodoName(todo);
    completeTodo(todo);
    // STRIKETHROUGH COMPLETED TODO
  };

  const handleDeleteTodo = (todo: string) => {
    setDeleteTodoName(todo);
    deleteTodo(todo);
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
            className="flex flex-col md:flex-row justify-between w-full mx-auto gap-6 bg-white m-2 items-center p-4 rounded-2xl shadow-lg py-4 hover:bg-slate-100"
          >
            <h3
              className={`text-xl lg:text-2xl tracking-wide ${complete} ${trash}`}
            >
              {todo.todo}
            </h3>
            <div>
              <ul className="flex gap-12 lg:gap-8">
                <TodoIcons
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleCompleteTodo={handleCompleteTodo}
                  handleEditTodo={editTodo}
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
