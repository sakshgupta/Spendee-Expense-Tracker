import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Addex() {
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
                        <img src="assets/img/favicon_io/android-chrome-192x192.png" alt="Logo" className="nav__logo-icon" />
                                <span className="nav__logo-name">Fudget</span>
                        </Link>
                        <div className="nav__list">
                            <Link to="/" className="nav__link">
                                <i className="bx bx-grid-alt nav__icon" title="Dashboard" onClick={refreshPage} />
                                <span className="nav__name">Dashboard</span>
                            </Link>
                            <Link to="/expense" className="nav__link active-nav">
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
            <main>
                <div className="row">
                    <div className="col-12" style={{ background: '#f6f6f6' }}>
                        <div className="row py-5">
                            <div className="col-12 col-lg-10 col-xl-8 mx-auto form-container">
                                <div className="card" style={{ marginTop: '50px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title"><i className="fas fa-plus-circle" /> Add expense</h5>
                                        <hr />
                                        <form className="row g-3" action="/records" method="POST">
                                            <div className="col-md-12 row mb-3 ml-1 mr-4">
                                                <label htmlFor="Name" className="col-md-4 col-form-label">Name<span className="field-required">*</span> </label>
                                                <input type="text" name="name" placeholder="" value="" className="form-control col-md-8" id="name" defaultValue required maxLength={15} />
                                            </div>
                                            <div className="col-md-12 row mb-3 ml-1 mr-4">
                                                <label htmlFor="date" className="col-md-4 col-form-label">Date<span className="field-required">*</span></label>
                                                <input type="date" name="date" className="form-control col-md-8 form-date" id="date" defaultValue required />
                                            </div>
                                            <div className="col-md-12 row mb-3 ml-1 mr-4">
                                                <label htmlFor="category" className="col-md-4 col-form-label">Category<span className="field-required">*</span></label>
                                                <select className="custom-select col-md-8" name="categoryId" id="category" style={{ marginTop: '0px', marginRight: '0px' }}>
                                                    <option value="60f3201ed0a9fb0015df1882">Home</option>
                                                    <option value="60f3201ed0a9fb0015df1883">Transportation</option>
                                                    <option value="60f3201ed0a9fb0015df1884">Entertainment</option>
                                                    <option value="60f3201ed0a9fb0015df1885">Food</option>
                                                    <option value="60f3201ed0a9fb0015df1886">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 row mb-3 ml-1 mr-4">
                                                <label htmlFor="merchant" className="col-md-4 col-form-label">Merchant</label>
                                                <input type="text" name="merchant" placeholder="" value="" className="form-control col-md-8" id="merchant" defaultValue />
                                            </div>
                                            <div className="col-md-12 row mb-3 ml-1 mr-4" style={{ display: 'none' }}>
                                                <label htmlFor="category" className="col-md-4 col-form-label">Category<span className="field-required">*</span></label>
                                                <select className="custom-select col-md-8" name="categoryId" id="category">
                                                    <option value="60f3201ed0a9fb0015df1881">Revenue</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 row mb-3 ml-1 mr-4">
                                                <label htmlFor="amount" className="col-md-4 col-form-label">Amount<span className="field-required">*</span></label>
                                                <input type="number" name="amount" className="form-control col-md-8" id="amount" defaultValue required min={1} max={999999} />
                                            </div>
                                            <input type="text" name="type" className="form-control col-md-8" defaultValue="revenue" style={{ display: 'none' }} />
                                            <div className="col-md-12 d-flex justify-content-end mr-4">
                                                <button className="btn btn-success" type="submit">Create</button>
                                            </div>
                                        </form>
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

export default Addex;
