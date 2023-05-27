import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import useAllowanceStore from "./store/useAllowanceStore";
import DayCard from "./components/DayCard";

function App() {
  const { allowance, limit, setLimit } = useAllowanceStore();
  const [toggle, setToggle] = useState(true);

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(<DayCard key={i} no={i} toggle={toggle} />);
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
      <button
        className="font-bold"
        onClick={() => setToggle((prevToggle) => !prevToggle)}
      >
        {" "}
        {toggle ? "Minimize Calendar" : "Expand Calendar"}
      </button>
      {toggle && <div className="flex flex-wrap ">{renderDays()}</div>}
      <div className="flex justify-center">{!toggle && <div className="flex flex-wrap w-1/2">{renderDays()}</div>}</div>
    </div>
  );
}

export default App;
