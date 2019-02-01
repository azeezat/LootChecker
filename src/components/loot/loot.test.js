import React from 'react'
import { shallow } from 'enzyme'
import { Loot } from './loot'

describe('Loot', () => {
    let loot = shallow(<Loot />);

    it('renders properly', () => {
        expect(loot).toMatchSnapshot();
    });
})