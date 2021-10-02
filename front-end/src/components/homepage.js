import React ,{ Component } from 'react';
import Navbar from './Navbar';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>here is home page</h1>
            </div>
        )
    }
}