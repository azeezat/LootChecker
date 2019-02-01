import React, { Component } from 'react';
import Wallet from './../Wallet/Wallet'
import Example from '../ex/ex'


class App extends Component {
    render() {
        return (
            <div>
                <h2>Loot Check</h2>
                <hr/>
                <Wallet/>
                {/* <Example /> */}
            </div>
        );
    }
}

export default App;