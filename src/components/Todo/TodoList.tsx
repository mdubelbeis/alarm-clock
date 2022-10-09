import TodoIcons from "./todoIcons";

interface TodoListProps {
  todos: { id: number; todo: string; isComplete: boolean }[];
  deleteTodo: (todo: string) => void;
  editTodo: () => void;
}
const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  const handleCompleteTodo = () => {
    console.log("Completed Todo");
  };

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
                <TodoIcons
                  todo={todo}
                  handleDeleteTodo={deleteTodo}
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
