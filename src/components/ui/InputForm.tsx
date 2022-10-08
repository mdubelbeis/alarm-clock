const InputForm: React.FC = () => {
  return (
    <form className="relative w-11/12 max-w-2xl">
      <label>
        <input
          className="w-full p-4 text-lg bg-white focus:outline-blue-500 rounded-2xl shadow-lg"
          type="text"
          autoFocus
          placeholder="Add new task"
        />
      </label>
      <button className="absolute py-2 px-4 top-[0.55rem] tracking-wider right-2 rounded-xl bg-blue-500 shadow-lg hover:bg-slate-50 hover:text-blue-500 text-white">
        ADD
      </button>
    </form>
  );
};

export default InputForm;
