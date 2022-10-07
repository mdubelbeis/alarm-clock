interface IconProps {
  d: string;
  width?: string;
}
const Icons: React.FC<IconProps> = ({ d, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${width} || w-10`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
};

export default Icons;
