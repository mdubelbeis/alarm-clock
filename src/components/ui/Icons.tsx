interface IconProps {
  d: string;
}
const Icons: React.FC<IconProps> = ({ d }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
};

export default Icons;
