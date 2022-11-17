import { useAppSelector } from "../../app/hooks";

const TodayDate: React.FC = () => {
  const date = useAppSelector((state) => state.clockStore.date);

  return (
    <div className="lg:m-4">
      <small className="text-green-500 text-2xl lg:text-4xl">{date}</small>
    </div>
  );
};

export default TodayDate;
