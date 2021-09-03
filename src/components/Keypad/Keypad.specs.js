import React from 'react'
import { shallow } from 'enzyme'

import Keypad from './Keypad'

describe('Keypad', () => {
    let wrapper 

    beforeEach(() => wrapper = shallow(  <Keypad
        callOperator={jest.fn()}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()} 
        numbers={[]}
        operators={[]}
      />))

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })
})