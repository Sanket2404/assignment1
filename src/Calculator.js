import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1 = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2 = (e) => {
    setNum2(e.target.value);
  };

  return (
    <>
      <div id="form">
        <br /><br />
        <label>
          <strong> Number 1 = </strong>
          &nbsp; <input type="text" value={num1} onChange={handleNum1} />
        </label>
        <br /><br />
        <label>
          <strong> Number 2 = </strong>
          &nbsp; <input type="text" value={num2} onChange={handleNum2} />
        </label>
        <br /><br />
        <button onClick={() => setResult(parseFloat(num1) + parseFloat(num2))}>
          Add
        </button>
        <button onClick={() => setResult(parseFloat(num1) - parseFloat(num2))}>
          Subtract
        </button>
        <br /><br />
        <button onClick={() => setResult(parseFloat(num1) * parseFloat(num2))}>
          Multiply
        </button>
        <button onClick={() => setResult(parseFloat(num1) / parseFloat(num2))}>
          Divide
        </button>
        <br /><br />
        <strong><label style={{ fontSize: "18px" }}>Result = {result}</label></strong>
      </div>
    </>
  );
};

export default Calculator;
