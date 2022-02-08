import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Data from "../components/HistoryData";
import Table from "../components/Table";
import Page from "../components/Page"

function createTable(row){
    return(
        <Table 
            key={row.id}
            name={row.Name}
            date={row.Dates}
            price={row.Price}
            cat={row.Category}
        />
    );
}
function History() {
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
                            <Link to="/history" className="nav__link active-nav">
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
                <div className="limiter">
                    <div className="container-table100" style={{paddingBottom: '20px'}}>
                    <div className="amount-container row justify-content-center">
                <div className="expense-container col-12 col-sm-3 col-lg-4 row justify-content-center">
                    <div className="pb-3 pt-4 col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <span className="p-2" style={{ background: '#fff', boxShadow: '0px 4px 4px 1px #a8bfd25c', borderRadius: '50%' }}>
                            <i className="bx bxs-bank" style={{ color: '#6ad6ff', fontSize: '28px'}} />
                        </span>
                    </div>
                    <div className="col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-dollar-sign fa-xs mr-1 " style={{ fontSize: '1.5rem'}}/>
                            <span style={{ fontSize: '2rem', fontWeight: 500 }}>6500</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#6ad6ff' }}>
                                Balance
                            </span>
                        </div>
                    </div>
                </div>
                <div className="balance-container col-12 col-sm-3 col-lg-4 my-2 pt-4 row justify-content-center">
                    <div className="pb-3 pt-4 col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <span style={{ background: 'white', boxShadow: '0px 4px 4px 1px #a8bfd25c', borderRadius: '50%' }} className="p-2">
                            <i className="bx bxs-dollar-circle" style={{ color: '#ffa773', fontSize: '28px' }} />
                        </span>
                    </div>
                    <div className="col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-dollar-sign fa-xs mr-1" style={{ fontSize: '1.5rem'}}/>
                            <span style={{ fontSize: '2rem', fontWeight: 500 }}>500</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#ffa773' }}>
                                Spent in the last 30 days
                            </span>
                        </div>
                    </div>
                </div>
                <div className="revenue-container col-12 col-sm-3 col-lg-4 my-2 pt-4 row justify-content-center">
                    <div className="pb-3 pt-4 col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <span style={{ background: 'white', boxShadow: '0px 4px 4px 1px #a8bfd25c', borderRadius: '50%' }} className="p-2">
                            <i className="bx bxs-doughnut-chart" style={{ color: '#00C9A1', fontSize: '28px' }} />
                        </span>
                    </div>
                    <div className="col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-dollar-sign fa-xs mr-1" style={{ fontSize: '1.5rem'}}/>
                            <span style={{ fontSize: '2rem', fontWeight: 500 }}>5600</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#00C9A1' }}>
                                Spend in the last year
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="wrap-table100">
                            <div className="table100">
                                <table>
                                    <thead>
                                        <tr className="table100-head">
                                            <th className="column1">Name</th>
                                            <th className="column2">Date</th>
                                            <th className="column3">Category</th>
                                            <th className="column4">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map(createTable)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Page />
                </div>
            </main>
        </div>
    </React.Fragment>;
}

export default History;
