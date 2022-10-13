import { useState } from "react";

interface InputFormProps {
  handleNewTodo: (newTodo: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ handleNewTodo }) => {
  const [todo, setTodo] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNewTodo(todo);
    setTodo("");
  };

  return (
    <form
      className="relative flex flex-col items-stretch gap-6 w-full max-w-2xl"
      onSubmit={handleSubmit}
    >
      <label>
        <input
          className="w-full p-4 text-lg bg-white focus:outline-blue-500 rounded-2xl shadow-lg"
          type="text"
          autoFocus
          placeholder="Add new task"
          value={todo}
          onChange={handleInputChange}
        />
      </label>
      <button className="md:absolute max-w-sm mx-auto py-2 px-6 md:py-2 md:px-6 md:top-[0.55rem] tracking-wider md:right-2 rounded-xl bg-blue-500 shadow-lg hover:bg-slate-50 hover:text-blue-500 text-white">
        ADD
      </button>
    </form>
  );
};

export default InputForm;
