import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Profile() {
    var refreshPage = require('./Home');
    const [sbar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sbar);
    return <React.Fragment>
        <div id="body-pd" className={sbar ? "body-pd" : "body"}>
            <header className={sbar ? "header-pd header" : "header"} id="header">
                <div className="header__toggle">
                    <i className={sbar ? 'bx bx-x' : 'bx bx-menu'} id="header-toggle" onClick={showSidebar} />
                </div>
                <Link to="/profile" className="header__img">
                    <img src="assets/img/avatar_23.jpg" alt="" />
                </Link>
            </header>
            <div className={sbar ? 'l-navbar show' : 'l-navbar'} id="nav-bar">
                <nav className="nav">
                    <div>
                        <Link to="/" className="nav__logo">
                            <img src="../assets/img/pie-chart-logo.png" alt="Logo" className="nav__logo-icon" onClick={refreshPage} />
                            <span className="nav__logo-name">Spendee</span>
                        </Link>
                        <div className="nav__list">
                            <Link to="/" className="nav__link">
                                <i className="bx bx-grid-alt nav__icon" title="Dashboard" onClick={refreshPage} />
                                <span className="nav__name">Dashboard</span>
                            </Link>
                            <Link to="/expense" className="nav__link">
                                <i className="bx bx-purchase-tag-alt nav__icon" title="Expense" />
                                <span className="nav__name">Expense</span>
                            </Link>
                            <Link to="/revenue" className="nav__link">
                                <i className="bx bx-dollar nav__icon" title="Revenue" />
                                <span className="nav__name">Revenue</span>
                            </Link>
                            <Link to="/history" className="nav__link">
                                <i className="bx bx-wallet nav__icon" title="History" />
                                <span className="nav__name">History</span>
                            </Link>
                            <Link to="/about" className="nav__link">
                                <i className="bx bx-group nav__icon" title="About Us" />
                                <span className="nav__name">About Us</span>
                            </Link>
                        </div>
                    </div>
                    <Link to="/login" className="nav__link">
                        <i className="bx bx-log-out nav__icon" />
                        <span className="nav__name">Log Out</span>
                    </Link>
                </nav>
            </div>
            <main>
                <div className="row">
                    <div className="col-12 form" style={{ background: '#f6f6f6', marginTop: '80px' }}>
                        <div className="container my-5 mx-auto">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="m-4 d-flex justify-content-center align-items-center">
                                        <img src="../assets/img/avatar_23.jpg" alt="Logo" style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '2px 3px 5px #495057eb' }} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-8 d-flex flex-column justify-content-center pt-4 pb-5 ">
                                    <div className="mb-3">
                                        <h3>Bob</h3>
                                        <p>user1@example.com</p>
                                    </div>
                                    <div>
                                        <a href="/" className="btn btn-primary">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </React.Fragment>;
}

export default Profile;
