import React ,{ Component } from 'react';
import Navbar from './Navbar';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}