import React, { useState } from 'react';
import { Link } from "react-router-dom";

function About() {
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
                            <img src="assets/img/favicon_io/android-chrome-192x192.png" alt="Logo" className="nav__logo-icon" />
                                <span className="nav__logo-name">Fudget</span>
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
                                <Link to="/about" className="nav__link active-nav">
                                    <i className="bx bx-group nav__icon" title="About Us" />
                                    <span className="nav__name">About Us</span>
                                </Link>
                                <div class="nav__link">
                                    <i class="bx bx-star nav__icon" title="Streak" />
                                    <span className="nav__name">
                                    <div className="star-widget">
                                        <input type="radio" name="rate" id="rate-5" />
                                        <label htmlFor="rate-5" className="bx bx-star" />
                                        <input type="radio" name="rate" id="rate-4" />
                                        <label htmlFor="rate-4" className="bx bx-star" />
                                        <input type="radio" name="rate" id="rate-3" />
                                        <label htmlFor="rate-3" className="bx bx-star" />
                                        <input type="radio" name="rate" id="rate-2" />
                                        <label htmlFor="rate-2" className="bx bx-star" />
                                        <input type="radio" name="rate" id="rate-1" />
                                        <label htmlFor="rate-1" className="bx bx-star" />
                                    </div>
                                    </span>
                                </div>
                                {/* Heart */}
                                <div class="heart_div nav__link">
                                    <i class="bx bx-heart nav__icon" title="Streak" />
                                    <span className="nav__name">Streak's On!!</span>
                                </div>
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
                            <div className="col-md-11 mx-auto" style={{ maxWidth: '1000px' }}>
                                    <div className="col-md-5 text-center ex-p team">
                                        About Us
                                    </div>
                                <div className="mt-4 mb-3 mx-2 row about">
                                    <div className="profile-card">
                                        <div className="img">
                                            <img src="assets/img/man.jpg" alt="Profile" />
                                        </div>
                                        <div className="caption">
                                            <h3>Pratyash Chaudhary</h3>
                                            <p>Back End Developer</p>
                                            <div className="social-links">
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-card">
                                        <div className="img">
                                            <img src="assets/img/man.jpg" alt="Profile" />
                                        </div>
                                        <div className="caption">
                                            <h3>Naivaidya Yadav</h3>
                                            <p>Back End Developer</p>
                                            <div className="social-links">
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-card">
                                        <div className="img">
                                            <img src="assets/img/man.jpg" alt="Profile" />
                                        </div>
                                        <div className="caption">
                                            <h3>Saksham Gupta</h3>
                                            <p>Front End Developer</p>
                                            <div className="social-links">
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-card">
                                        <div className="img">
                                            <img src="assets/img/man.jpg" alt="Profile" />
                                        </div>
                                        <div className="caption">
                                            <h3>Srishti Saxena</h3>
                                            <p>Front End Developer</p>
                                            <div className="social-links">
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-card">
                                        <div className="img">
                                            <img src="assets/img/man.jpg" alt="Profile" />
                                        </div>
                                        <div className="caption">
                                            <h3>Anushka Singh</h3>
                                            <p>UI Developer</p>
                                            <div className="social-links">
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}

export default About;
