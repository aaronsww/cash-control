import  React, { useState } from "react";
import "./App.css";
import useAllowanceStore from "./store/useAllowanceStore";

function App() {

  const {allowance, setAllowance} = useAllowanceStore();

  const handleSubmit = event => {
    event.preventDefault();
  };

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
    </>
  );
}

export default App;
