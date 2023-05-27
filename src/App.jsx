import  React, { useState } from "react";
import "./App.css";
import useAllowanceStore from "./store/useAllowanceStore";

function App() {

  const {allowance, setAllowance} = useAllowanceStore();

  const [limit, setLimit] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    calcLimit();
  };

  function calcLimit(){
    setLimit(allowance/30);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>
        Monthly Allowance:
        <input
          type="number"
          value={allowance}
          onChange={(e)=> setAllowance(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    <h1 className="text-blue-200">{limit}</h1>
    </>
  );
}

export default App;
