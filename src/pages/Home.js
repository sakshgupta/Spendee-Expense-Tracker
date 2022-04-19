import React, { useState } from 'react';
import Form from "../components/Form";
import Budget from "../components/Budget";
import Record from "../components/Record";
import Page from "../components/Page";
import Expense from "../components/Expense";
import { Link } from "react-router-dom";

function Home() {
    const [sbar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sbar);
    return <React.Fragment>
        <div id="body-pd" className={sbar ? "body-pd" : "body"}>
            <div>
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
                                <Link to="/" className="nav__link active-nav">
                                    <i className="bx bx-grid-alt nav__icon" title="Dashboard" />
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
            </div>
            <main>
                <div className="row style" style={{ backgroundColor: '#F6F6F6' }}>
                    <div className="col-12 col-xl-8">
                        <div className="py-5">
                            <div className="col-md-11 mx-auto">
                                <Form />
                                <Budget />
                                <Record />
                                <Page />
                            </div>
                        </div>
                    </div>
                    <Expense />
                </div>
            </main>
            <span id="category-amount" style={{ display: 'none' }} data-category="0,0,1000,0,0" />
            <span id="category-name" style={{ display: 'none' }} data-category="Home,Transportation,Entertainment,Food,Other" />
            <span id="budget-amount" style={{ display: 'none' }} data-budget="1000,9000" />
            <span id="month" style={{ display: 'none' }} data-category="2022-2,2021-12,2021-11,2021-10,2021-7,2021-3,2020-5,2020-3,2020-1,2005-6" />
            <span id="month-amount" style={{ display: 'none' }} data-category="1000,71691,1500,110,100,3780,11230,10090,12640,100" />
        </div>
    </React.Fragment>;
}

export default Home;
