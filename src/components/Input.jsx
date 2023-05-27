import React from "react";
import useAllowanceStore from "../store/useAllowanceStore";

function Input({ calc }) {
  const { allowance, setAllowance } = useAllowanceStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    calc();
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit} className="flex items-center">
        <label className="mr-4 text-xl font-bold ml-2">
          Monthly Allowance:
          <input
            type="number"
            value={allowance}
            onChange={(e) => setAllowance(e.target.value)}
            className="border border-gray-300 px-2 py-1 ml-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        {/* <button
          type="submit"
          className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default Input;
