import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

function App() {
  const [number1, setNumber1] = React.useState(1);
  const [number2, setNumber2] = React.useState(2);

  return (
    <div>
      <input defaultValue={number1} />
      <span>+</span>
      <input defaultValue={number2} />

      <span>=</span>
      <span>{number1 + number2}</span>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
