import { useState, useEffect } from "react";

const TodayDate: React.FC = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  return (
    <div className="lg:m-4">
      <small className="text-green-500 text-2xl lg:text-4xl">{date}</small>
    </div>
  );
};

export default TodayDate;
