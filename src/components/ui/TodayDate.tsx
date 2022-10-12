import { useState, useEffect } from "react";

const TodayDate: React.FC = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  return (
    <div>
      <small className="text-green-500 text-2xl">{date}</small>
    </div>
  );
};

export default TodayDate;
