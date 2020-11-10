import React, { Component } from 'react';

class login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="text-center mb-4">
                                <a href="index.html" className="auth-logo mb-5 d-block">
                                    <img src="assets/images/logo-dark.png" alt="" height={30} className="logo logo-dark" />
                                    <img src="assets/images/logo-light.png" alt="" height={30} className="logo logo-light" />
                                </a>
                                <h4>Sign in</h4>
                                <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>
                            </div>
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="p-3">
                                        <form action="https://themesbrand.com/chatvia/layouts/index.html">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                    <i className="ri-user-2-line" />
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control bg-soft-light border-light" placeholder="Enter Username" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <div className="float-right">
                                                <a href="auth-recoverpw.html" className="text-muted font-size-13">Forgot password?</a>
                                            </div>
                                            <label>Password</label>
                                            <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                    <i className="ri-lock-2-line" />
                                                    </span>
                                                </div>
                                                <input type="password" className="form-control bg-soft-light border-light" placeholder="Enter Password" />
                                            </div>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-4">
                                            <input type="checkbox" className="custom-control-input" id="remember-check" />
                                            <label className="custom-control-label" htmlFor="remember-check">Remember me</label>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Sign in</button>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default login;