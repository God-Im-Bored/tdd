import React from "react";
import PropTypes from "prop-types";

import "./Keypad.css";
import "../Key/Key";
import Key from "../Key/Key";

const Keypad = ({
  callOperator,
  setOperator,
  updateDisplay,
  numbers,
  operators,
}) => {
  const numsKeys = numbers.map((number) => (
    <Key
      key={number}
      keyAction={updateDisplay}
      keyType="number-key"
      keyValue={number}
    />
  ));

  const opsKeys = operators.map((operator) => (
    <Key
      key={operator}
      keyAction={setOperator}
      keyType="operator-key"
      keyValue={operator}
    />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numsKeys}</div>
      <div className="operators-container">{opsKeys}</div>
      <div className="submit-container">
        <Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
      </div>
    </div>
  );
};
Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
};

export default Keypad;
