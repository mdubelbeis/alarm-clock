import { useState, useEffect } from "react";
import { RootState } from "../../app/store";
import { todoActions } from "../../app/Todo/TodoSlice";
import { useSelector, useDispatch } from "react-redux";

interface AddNewTodoProps {
  handleErrorMessage: (message: string) => void;
}

const AddNewTodo: React.FC<AddNewTodoProps> = ({ handleErrorMessage }) => {
  const [todoText, setTodoText] = useState<string>("");
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [maxLength, setMaxLength] = useState<number>(28);
  const [errorMessage, setErrorMessage] = useState<string>("");
  // const [submitError, setSubmitError] = useState<string>("");
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoStore.todoList);

  useEffect(() => {
    getWindowSize();
  }, [windowSize]);

  const getWindowSize = () => {
    let width = window.innerWidth;
    setWindowSize(width);

    // Set maxLength attribute on input.
    if (windowSize >= 768) {
      setMaxLength(67);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filterTodoNames = todos.filter(
      (todo) => todo.todo.toLowerCase() === todoText.toLowerCase()
    );

    if (filterTodoNames.length === 0 && todoText.length > 0) {
      dispatch(todoActions.addTodo(todoText));
      setErrorMessage("");
    } else {
      todoText.length <= 0
        ? setErrorMessage("A Todo must have more than one letter...")
        : setErrorMessage("That Todo is already in your Todo list...");
    }

    handleErrorMessage(errorMessage);
    setTodoText("");
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
          value={todoText}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
      </label>
      <button
        disabled={disableBtn}
        className="absolute max-w-sm mx-auto py-2 px-6 top-[0.55rem] tracking-wider right-2 rounded-xl bg-blue-500 shadow-lg hover:bg-blue-700 text-white"
      >
        ADD
      </button>
    </form>
  );
};

export default AddNewTodo;
