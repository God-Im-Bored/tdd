import React from 'react'
import { mount, shallow } from 'enzyme'

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

describe('mounted Calculator', () => {
    let wrapper;

    beforeEach(() => wrapper = mount(<Calculator />))

    it('calls updateDisplay when a number key is clicked', () => {
        const spy = jest.spyOn(wrapper.instance(), 'updateDisplay')
        wrapper.instance().forceUpdate()
        expect(spy).toHaveBeenCalledTimes(0)
        wrapper.find('.number-key').first().simulate('click')
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('calls setOperator when an operator key is clicked', () => {
        const spy = jest.spyOn(wrapper.instance(), 'setOperator')
        wrapper.instance().forceUpdate()
        expect(spy).toHaveBeenCalledTimes(0)
        wrapper.find('.operator-key').first().simulate('click')
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('calls callOperator when the submit button is clicked', () => {
        const spy = jest.spyOn(wrapper.instance(), 'callOperator')
        wrapper.instance().forceUpdate()
        expect(spy).toHaveBeenCalledTimes(0)
        wrapper.find('.submit-key').simulate('click')
        expect(spy).toHaveBeenCalledTimes(1)
    })
})

describe('updateDisplay', () => {
    let wrapper 

    beforeEach(() => wrapper = shallow(<Calculator />))

    it('updates displayValue', () => {
        wrapper.instance().updateDisplay('0')
        expect(wrapper.state('displayValue')).toEqual('0')
    })

    it('concatenates input value onto displayValue', () => {
        wrapper.instance().updateDisplay('5')
        expect(wrapper.state('displayValue')).toEqual('5')
        wrapper.instance().updateDisplay('0')
        expect(wrapper.state('displayValue')).toEqual('50')
    })

    it('deletes the last character when ce is clicked or renders 0 if empty', () => {
        wrapper.instance().updateDisplay('ce')
        expect(wrapper.state('displayValue')).toEqual('0')
    })

    it('removes the last character when ce is clicked', () => {
        wrapper.instance().updateDisplay('1')
        expect(wrapper.state('displayValue')).toEqual('1')
        wrapper.instance().updateDisplay('4')
        wrapper.instance().updateDisplay('7')
        wrapper.instance().updateDisplay('ce')
        expect(wrapper.state('displayValue')).toEqual('14')
    })

    it('prevents multiples leading zeros', () => {
        wrapper.instance().updateDisplay('0')
        wrapper.instance().updateDisplay('0')
        expect(wrapper.state('displayValue')).toEqual('0')
    })

    it('prevents multiple uses of .', () => {
        wrapper.instance().updateDisplay('1')
        wrapper.instance().updateDisplay('.')
        wrapper.instance().updateDisplay('.')
        wrapper.instance().updateDisplay('4')
        expect(wrapper.state('displayValue')).toEqual('1.4')
    })
})

describe('setOperator', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Calculator />))

    it('updates the value of selectedOperator', () => {
        wrapper.instance().setOperator('+')
        expect(wrapper.state('selectedOperator')).toEqual('+')
        wrapper.instance().setOperator('/')
        expect(wrapper.state('selectedOperator')).toEqual('/')
    })

    it('updates the value of storedValue', () => {
        wrapper.setState({ displayValue: '1'})
        wrapper.instance().setOperator('+')
        expect(wrapper.state('storedValue')).toEqual('1')
    })

    it('updates the value of displayValue to 0', () => {
        wrapper.setstate({ displayvalue: '3'})
        wrapper.instance().setOperator('-')
        expect(wrapper.state('displayValue')).toEqual('0')
    })

    it('selectedOperator is an empty string, does not update storedValue', () => {
        wrapper.setState({ displayValue: '1' })
        wrapper.instance().setOperator('+')
        expect(wrapper.state('storedValue')).toEqual('1')
        wrapper.instance().setOperator('-')
        expect(wrapper.state('storedValue')).toEqual('1')
    })
})