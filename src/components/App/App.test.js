import React from 'react'
import {shallow} from 'enzyme'
import App from './App'

describe('App',()=>{
    const app=shallow(<App/>)
    it('renders propely',()=>{
        expect(app).toMatchSnapshot();
    })
    it('contains a Connected Wallet component',()=>{
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })
    // it('creates an input ')
})