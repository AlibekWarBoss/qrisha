import React, {Component} from "react";
import {Register} from "../../Data/account";

export default class SignUpComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }

    handleChange = (code, event) => {
        this.setState({[code]: event.target.value});
    };

    signUp = () => {
        const Status = Register(this.state);

        console.log("I am here bro");

        if (Status.state) {
            alert(Status.message);
            this.props.history.push('/sign-in');
        } else {
            alert(Status.message);
        }
    };

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" value={this.state.firstName}
                                   onChange={($event) => this.handleChange('firstName', $event)}
                                   className="form-control" placeholder="First name"/>
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" value={this.state.lastName}
                                   onChange={($event) => this.handleChange('lastName', $event)} className="form-control"
                                   placeholder="Last name"/>
                        </div>

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

                        <button type="submit" className="btn btn-primary btn-block" onClick={this.signUp}>Sign Up
                        </button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
