import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import useAllowanceStore from "./store/useAllowanceStore";
import DayCard from "./components/DayCard";

function App() {
  const { allowance, limit, setLimit } = useAllowanceStore();

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(<DayCard key={i} no={i} />);
    }
    return days;
  };

  const calcLimit = () => {
    setLimit(Math.round(allowance / 30));
  };

  useEffect(() => {
    setLimit(Math.round(allowance / 30));
  }, [allowance]);

  return (
    <div className="mx-auto px-4 py-8">
      <Input calc={calcLimit} />
      <div className="text-xl font-bold ml-2 mb-4 text-start">
        Daily Limit: ₹{limit}
      </div>
      <div className="flex flex-wrap -mx-4">{renderDays()}</div>
    </div>
  );
}

export default App;
