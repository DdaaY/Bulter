import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <Link to='/' className ="navbar-brand">Navbar</Link>
                    <form className ="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
                    </form>
                </nav>
            </div>
        );
    }
}