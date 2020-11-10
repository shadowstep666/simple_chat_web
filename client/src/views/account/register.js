import React, { Component } from 'react';

class register extends Component {
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
                                    <img src="assets/images/logo-dark.png" alt height={30} className="logo logo-dark" />
                                    <img src="assets/images/logo-light.png" alt height={30} className="logo logo-light" />
                                </a>
                                <h4>Sign up</h4>
                                <p className="text-muted mb-4">Get your Chatvia account now.</p>
                            </div>
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="p-3">
                                        <form action="https://themesbrand.com/chatvia/layouts/index.html">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-mail-line" />
                                                    </span>
                                                    </div>
                                                    <input type="email" className="form-control bg-soft-light border-light" placeholder="Enter Email" />
                                                </div>
                                            </div>
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
                                            <div>
                                            <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Sign up</button>
                                            </div>
                                            <div className="mt-4 text-center">
                                            <p className="text-muted mb-0">By registering you agree to the Chatvia <a href="#" className="text-primary">Terms of Use</a></p>
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
export default register;