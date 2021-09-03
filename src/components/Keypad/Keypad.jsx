import React from 'react'
import PropTypes from 'prop-types'

import './Keypad.css'
import '../Key/Key'
import Key from '../Key/Key'

const Keypad = ({ callOperator, setOperator, updateDisplay, numbers, operators }) =>  {

    const nums = numbers.map((number) => <p key={number}>{number}</p>)
    const ops = operators.map((operator) => <p key={operator}>{operator}</p>)

    return (
    <div className='keypad-container'>
        <div className='numbers-container'>
            {nums}
        </div>
        <div className='operators-container'>
            {ops}
        </div>
        <Key
            keyAction={callOperator}
            keyType=''
            keyValue=''
        />

    </div>
)
}
Keypad.propTypes = {
    callOperator: PropTypes.func.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired
}

export default Keypad