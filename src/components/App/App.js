import React, { Component } from 'react';
import Wallet from './../Wallet/Wallet'
import './App.css'

import Ex from '../ex/ex'
class App extends Component {
    render() {
        return (
            <div className="body">
                <h2>Loot Check</h2>
                <hr/>
                <Wallet/>
                {/* <Ex /> */}
            </div>
        );
    }
}

export default App;