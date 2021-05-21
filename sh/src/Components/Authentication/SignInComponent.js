import React from "react";
import {Component} from "react";
import {AuthenticateUser} from "../../Data/account";

export default class SignInComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (code, event) => {
        this.setState({[code]: event.target.value});
    };

    submit = () => {
        const result = AuthenticateUser(this.state.email, this.state.password);

        if (result) {
            localStorage.setItem('user', JSON.stringify(result));
            this.props.history.push("/dashboard");
        } else {
            alert("Wrong Email or Password, please try again!")
        }
    };

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" value={this.state.email}
                                   onChange={($event) => this.handleChange('email', $event)} className="form-control"
                                   placeholder="Enter email"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" value={this.state.password}
                                   onChange={($event) => this.handleChange('password', $event)} className="form-control"
                                   placeholder="Enter password"/>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={this.submit}>Submit
                        </button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    };
}
