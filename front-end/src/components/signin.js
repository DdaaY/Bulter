import { Component } from "react";

export default class Signin extends Component {
    render() {
        return (
            <div>
                <h3>Sign in</h3>
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label>Email:</label>
                        <input type='email'
                            required
                            className="form-control"/>
                    </div>

                    <div className = "form-group">
                        <input type = "submit" value = "Create user" className = "btn btn-primary"/>
                    </div>

                </form>
            </div>
        );
    }
}