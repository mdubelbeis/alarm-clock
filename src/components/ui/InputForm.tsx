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
  };

  return (
    <form className="relative w-11/12 max-w-2xl" onSubmit={handleSubmit}>
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
      <button className="absolute py-2 px-4 top-[0.55rem] tracking-wider right-2 rounded-xl bg-blue-500 shadow-lg hover:bg-slate-50 hover:text-blue-500 text-white">
        ADD
      </button>
    </form>
  );
};

export default InputForm;
