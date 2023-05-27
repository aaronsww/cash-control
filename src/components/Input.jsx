import React from "react";
import useAllowanceStore from "../store/useAllowanceStore";

function Input({ calc }) {
  const { allowance, setAllowance } = useAllowanceStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    calc();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Monthly Allowance:
          <input
            type="number"
            value={allowance}
            onChange={(e) => setAllowance(e.target.value)}
          />
        </label>
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default Input;
