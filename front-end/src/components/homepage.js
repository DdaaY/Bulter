import React ,{ Component } from 'react';
import Navbar from './Navbar';

export default class Homepage extends Component {

    constructor(props){
        super(props);

        this.state = ({
            id: this.props.id,
        });


    }

    render() {
        return (
            <div>
                <Navbar id = {this.state.id} />
                <h1>{this.state.id}</h1>
            </div>
        )
    }
}