import React from 'react'
import { shallow } from 'enzyme'

import Calculator from './Calculator'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'

describe('Calculator', () => {
    let wrapper

    beforeEach(() => wrapper = shallow(<Calculator />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot())

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })

    it('should render child components Display and Keypad', () => {
        expect(wrapper.containsAllMatchingElements([
            <Display displayValue={wrapper.instance().state.displayValue}/>,
            <Keypad
              callOperator={wrapper.instance().callOperator}
              setOperator={wrapper.instance().setOperator}
              updateDisplay={wrapper.instance().updateDisplay} 
              numbers={wrapper.instance().state.numbers}
              operators={wrapper.instance().state.operators}
            />
        ])).toEqual(true)
    })
})