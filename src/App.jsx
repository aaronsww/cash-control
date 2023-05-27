import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import useAllowanceStore from "./store/useAllowanceStore";

function App() {
  const { allowance, setAllowance } = useAllowanceStore();

  const calcLimit = () =>  {
    setLimit(allowance / 30);
  }

  const [limit, setLimit] = useState(0);

  return (
    <>
      <Input calc={calcLimit}></Input>
      <div>{limit}</div>
    </>
  );
}

export default App;
