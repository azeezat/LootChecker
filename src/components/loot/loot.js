import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchBitcoin} from '../../actions/bitcoin'


class Loot extends Component {
    render() {
        return (
            <div>
                Bitcoin Balance
            </div>
        );
    }
}

export default connect(state => state, { fetchBitcoin })(Loot);