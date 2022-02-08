import React, { useState } from 'react';
import Form from "../components/Form";
import Record from "../components/Record";
import Page from "../components/Page";
import { Link } from "react-router-dom";

function Revenue() {
    var refreshPage = require('./Home');
    const [sbar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sbar);
    return (
        <React.Fragment>
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
                                <Link to="/revenue" className="nav__link active-nav">
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
                    <div className="col-12" style={{ background: '#f6f6f6' }}>
                        <div className="row py-5">
                            <div className="col-md-11 mx-auto" style={{ maxWidth: '880px' }}>
                                <Form />
                                <div className="mt-4 mb-3 mx-2 row">
                                    <div className="col-md-3 text-center">
                                        <h6 style={{ color: '#00C9A1' }}>Total revenue:</h6>
                                    </div>
                                    <div className="col-md-5 total-amount text-center ex-p">
                                        ₹10,000
                                    </div>
                                </div>
                                <div className="mb-2 mt-5 d-flex justify-content-center">
                                    <Link className=" btn btn-info ex" to="/addrev">Add revenue</Link>
                                </div>
                                <Record />
                                <Page />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}

export default Revenue;
