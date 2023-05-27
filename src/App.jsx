import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import useAllowanceStore from "./store/useAllowanceStore";
import DayCard from "./components/DayCard";

function App() {
  const { allowance,  limit, setLimit  } = useAllowanceStore();
  // const [limit, setLimit] = useState(0);

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(
        <DayCard
          key={i}
          no={i}
        />
      );
    }
    return days;
  };

  const calcLimit = () => {
    setLimit(allowance / 30);
  };

  
  useEffect(() => {
    setLimit(allowance / 30);
  }, [allowance]);

  return (
    <>
      <Input calc={calcLimit}></Input>
      <div>Daily Limit: {limit}</div>
      <div className="flex flex-wrap  ">{renderDays()}</div>
    </>
  );
}

export default App;
