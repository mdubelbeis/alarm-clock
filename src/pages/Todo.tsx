import TodoList from "../components/Todo/TodoList";
import InputForm from "../components/ui/InputForm";

const Todo: React.FC = () => {
  return (
    <div className="py-20 px-10 max-w-6xl mx-auto flex flex-col gap-20 items-center lg:shadow-lg rounded-lg bg-slate-50">
      <InputForm />
      <div className="w-full">
        <ul className="flex flex-col lg:grid md:grid-cols-2 gap-4">
          <TodoList />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
