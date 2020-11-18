import React, { useCallback, useRef, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [registered, setRegistered] = useState(false);
    const [errorName, setErrorName] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [error, setError] = useState(null);

    const nameRef = useRef();
    const passRef = useRef();

    const submit = useCallback(async (e) => {
        e.preventDefault();
        setError(null);
        setErrorName(null);
        setErrorPassword(null);
        if (!nameRef.current.value) {
            return setErrorName("Name is required!");
        }
        if (!passRef.current.value) {
            return setErrorPassword("Password is required!");
        }

        await axios.post(`${process.env.REACT_APP_API_URL}/register`, {
            username: nameRef.current.value,
            password: passRef.current.value,
        }).then(function (response) {
            if (response.data) {
                if (response.data.status === 0) {
                    return setError(response.data.message);
                } else {
                    setRegistered(true);
                }
            }
        })
    }, [nameRef, passRef])

    if (registered) {
        return <Redirect to={{ pathname: "/login" }} />;
    }

    return (
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center mb-4">
                            <a href="#" className="auth-logo mb-5 d-block">
                                <img src="assets/images/logo-dark.png" alt height={30} className="logo logo-dark" />
                                <img src="assets/images/logo-light.png" alt height={30} className="logo logo-light" />
                            </a>
                            <h4>Sign up</h4>
                            <p className="text-muted mb-4">Get your Chatvia account now.</p>
                        </div>
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="p-3">
                                    {error && <span className="text-danger">*{error}</span>}
                                    <form>
                                        <div className="form-group">
                                        <label style={{float: "left"}}>Username</label>
                                        { errorName && <span className="text-danger">*{errorName}</span>}
                                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text border-light text-muted">
                                                <i className="ri-user-2-line" />
                                            </span>
                                            </div>
                                            <input type="text" className="form-control bg-soft-light border-light" placeholder="Enter Username" 
                                                ref={nameRef}/>
                                        </div>
                                        </div>
                                        <div className="form-group mb-4">
                                        <label style={{float: "left"}}>Password</label>
                                        { errorPassword && <span className="text-danger">*{errorPassword}</span>}
                                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text border-light text-muted">
                                                <i className="ri-lock-2-line" />
                                            </span>
                                            </div>
                                            <input type="password" className="form-control bg-soft-light border-light" placeholder="Enter Password"
                                                ref={passRef}/>
                                        </div>
                                        </div>
                                        <div>
                                        <button className="btn btn-primary btn-block waves-effect waves-light" onClick={submit}>Sign up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <p>Already have an account ? <Link to="/login" class="font-weight-medium text-primary"> Signin </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;