import React from 'react'
import { shallow } from 'enzyme'

import Keypad from './Keypad'
import './Keypad.css'

describe('Keypad', () => {
    let wrapper 

    beforeEach(() => wrapper = shallow(  <Keypad
        callOperator={jest.fn()}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()} 
        numbers={[]}
        operators={[]}
      />))

      it('should render an instance of the Key component', () => {
          expect(wrapper.find('Key').length).toEqual(1)
      })

      it('should render the values of numbers', () => {
        wrapper.setProps({ numbers: ['0', '1', '2']})
        expect(wrapper.find('.numbers-container').text()).toEqual('012')
      })

      it('should render the values of operators', () => {
          wrapper.setProps({ operators: ['+', '-', '*', '/']})
          expect(wrapper.find('.operators-container').text()).toEqual('+-*/')
      })

    it('should render 3 <div />s', () => {
        expect(wrapper.find('div').length).toEqual(3)
    })
})