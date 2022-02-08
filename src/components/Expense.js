import React from 'react';

function Expense() {
    return <div className="col-12 col-xl-4" style={{ marginLeft: '-10px', height: '90%', marginBottom: '30px !important' }}>
        <div className="col-11 mx-auto" style={{ margin: '0 auto', position: 'sticky', top: '50px' }}>
            <div className="category-title mt-5">
                <h5 className style={{ marginLeft: '-15px', fontWeight: 600, fontSize: '1.2rem' }}>
                    Expenses by Category
                </h5>
            </div>
            <div className="row">
                <div className="col-md-6 col-xl-12">
                    <div className="mx-auto" style={{ maxWidth: '400px' }}>
                        <canvas id="myChart" width={300} height={300} />
                    </div>
                </div>
                <div className="category-container col-md-6 col-xl-12  ">
                    <div className="category row mb-4 mx-auto">
                        <div className="category-icon col-2 d-flex justify-content-center">
                            <i className="fas fa-home fa-lg record-icon" style={{ color: 'white' }} />
                        </div>
                        <div className="category-info col-10 row d-flex align-items-center">
                            <div className="col-12 col-sm-8 col-lg-8 col-xl-12" style={{ fontWeight: 500 }}>Home</div>
                            <div className="col-12 col-sm-4 col-lg-4 col-xl-12">₹0</div>
                        </div>
                    </div>
                    <div className="category row mb-4 mx-auto">
                        <div className="category-icon col-2 d-flex justify-content-center">
                            <i className="fas fa-shuttle-van fa-lg record-icon" style={{ color: 'white' }} />
                        </div>
                        <div className="category-info col-10 row d-flex align-items-center">
                            <div className="col-12 col-sm-8 col-lg-8 col-xl-12" style={{ fontWeight: 500 }}>
                                Transportation</div>
                            <div className="col-12 col-sm-4 col-lg-4 col-xl-12">₹0</div>
                        </div>
                    </div>
                    <div className="category row mb-4 mx-auto">
                        <div className="category-icon col-2 d-flex justify-content-center">
                            <i className="fas fa-grin-beam fa-lg record-icon" style={{ color: 'white' }} />
                        </div>
                        <div className="category-info col-10 row d-flex align-items-center">
                            <div className="col-12 col-sm-8 col-lg-8 col-xl-12" style={{ fontWeight: 500 }}>
                                Entertainment</div>
                            <div className="col-12 col-sm-4 col-lg-4 col-xl-12">₹1000</div>
                        </div>
                    </div>
                    <div className="category row mb-4 mx-auto">
                        <div className="category-icon col-2 d-flex justify-content-center">
                            <i className="fas fa-utensils fa-lg record-icon" style={{ color: 'white' }} />
                        </div>
                        <div className="category-info col-10 row d-flex align-items-center">
                            <div className="col-12 col-sm-8 col-lg-8 col-xl-12" style={{ fontWeight: 500 }}>Food</div>
                            <div className="col-12 col-sm-4 col-lg-4 col-xl-12">₹0</div>
                        </div>
                    </div>
                    <div className="category row mb-4 mx-auto">
                        <div className="category-icon col-2 d-flex justify-content-center">
                            <i className="fas fa-pen fa-lg record-icon" style={{ color: 'white' }} />
                        </div>
                        <div className="category-info col-10 row d-flex align-items-center">
                            <div className="col-12 col-sm-8 col-lg-8 col-xl-12" style={{ fontWeight: 500 }}>Other
                            </div>
                            <div className="col-12 col-sm-4 col-lg-4 col-xl-12">₹0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Expense;
