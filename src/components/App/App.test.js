import React from 'react'
import {shallow} from 'enzyme'
import App from './App'

describe('',()=>{
    const app=shallow(<App/>)
    it('renders propely',()=>{
        expect(app).toMatchSnapshot();
    })
})