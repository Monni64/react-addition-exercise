import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

function addition(num1, num2) {
	if (isNaN(num1) || isNaN(num2)) {
		return "";
	} else {
		return (Number(num1) + Number(num2));
	}
}

function App() {
  const [number1, setNumber1] = React.useState(1);
  const [number2, setNumber2] = React.useState(2);

  return (
    <div>
      <input defaultValue={number1} onChange={e => setNumber1(e.target.value)} />
      <span>+</span>
      <input defaultValue={number2} onChange={e => setNumber2(e.target.value)} />

      <span>=</span>
      <span>{addition(number1, number2)}</span>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
