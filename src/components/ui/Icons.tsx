interface IconProps {
  d: string;
  width?: string;
  id: string;
  isFavorite?: boolean;
}
const Icons: React.FC<IconProps> = ({ d, width, id, isFavorite }) => {
  let textColor = "";

  if (id === "completeIcon" || id === "playPauseIcon") {
    textColor = "text-green-500";
  } else if (id === "editIcon") {
    textColor = "text-orange-500";
  } else if (id === "heartIcon") {
    textColor = `${`text-white fill-white hover:fill-red-500 hover:text-red-500 active:fill-red-700 active:text-red-700 ${
      isFavorite ? "fill-red-500 text-red-500" : ""
    }`}`;
  } else {
    textColor = "text-blue-500";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${`${width} || w-10`} ${textColor} hover:cursor-pointer`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
};

export default Icons;
