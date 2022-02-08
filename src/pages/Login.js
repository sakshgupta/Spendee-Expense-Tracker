import React from 'react';
import { Link } from "react-router-dom";

function Login() {
    return <React.Fragment>
            <main>
                <div className="row">
                    <div className="col-12" style={{ background: '#f6f6f6' }}>
                        <div className="row my-5">
                            <div className="col-11 col-md-8 m-auto form-container">
                                <div className="card card-body">
                                    <h1 className="text-center mt-3">Login</h1>
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{ width: '100%' }}>
                                        If you don't prefer to log in, use the default login.
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    {/* <form action="#" method="POST"> Use this insted of the below line to post*/}
                                    <form action="/">
                                        <div className="form-group">
                                            <label className="col-form-label" htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" defaultValue="user1@example.com" required />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label className="col-form-label" htmlFor="password">Password</label>
                                            <div className="d-flex align-items-center">
                                                <input type="password" id="password" name="password" className="form-control" placeholder="Enter Password" defaultValue={12345678} required />
                                                <i className="fas fa-eye-slash" style={{ marginLeft: '-35px', cursor: 'pointer' }} id="togglePassword" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>
                                    </form>
                                    <p className="lead mt-4">
                                        No Account? <Link to="/">Register</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    </React.Fragment>;
}

export default Login;
