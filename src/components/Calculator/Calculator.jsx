import React, { Component } from "react";
import "./Calculator.css";
import Display from "../Display/Display";
import Keypad from '../Keypad/Keypad'

class Calculator extends Component {
  state = {
    displayValue: "0",
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
    operators: ['+', '-', '*', '/'],
    selectedOperator: "",
    storedValue: "",
  };

  callOperator = () => {
    console.log("call operation");
  };

  setOperator = (value) => {
    
    let { displayValue, storedValue, selectedOperator } = this.state;

    if (selectedOperator === '') {
      storedValue = displayValue 
      displayValue = '0'
      selectedOperator = value
    } else {
      selectedOperator = value
    }

    this.setState({ displayValue, storedValue, selectedOperator })

    
  };

  updateDisplay = (value) => {
    

    let { displayValue } = this.state;

    if (value === '.' && displayValue.includes('.')) {
      value = ''
    }

    if (value === 'ce') {
      displayValue = displayValue.substring(0, displayValue.length - 1)

      if(displayValue === '') displayValue = '0'
    } else {
      displayValue === '0' ? displayValue = value : displayValue += value
    }

    this.setState({displayValue})


  };

  render = () => {
    const { displayValue, numbers, operators } = this.state;
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
            callOperator={this.callOperator}
            setOperator={this.setOperator}
            updateDisplay={this.updateDisplay}
            numbers={numbers}
            operators={operators}
        />
      </div>
    );
  };
}

export default Calculator;
