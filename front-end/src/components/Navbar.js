import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to='/home' className = "navbar-brand">Javis</Link>
                    <div className = "collpase navbar-collapse">
                        <ul className = "navbar-nav mr-auto">
                            <li className = "navbar-item">
                                <Link to='/' className = "nav-link">Exercises</Link>
                            </li>
                            <li className = "navbar-item">
                                <Link to='/create' className = "nav-link">Create Exercise log</Link>
                            </li>
                            <li className = "navbar-item">
                                <Link to='/user' className = "nav-link">Create User</Link>
                            </li>
                            <li className = 'navbar-item'>
                                <Link to='/signin' className = 'nav-link'>Sign in</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}