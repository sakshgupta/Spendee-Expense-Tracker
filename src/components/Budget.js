import React from 'react';

function Budget() {
    return <div className="mt-4 mb-5 row" style={{ marginRight: '-15px !important' }}>
        <div className="col-lg-7 d-flex flex-column justify-content-around">
            <div className="amount-container row justify-content-center">
                <div className="expense-container col-12 col-sm-3 col-lg-4 my-2 pt-4 row justify-content-center">
                    <div className="pb-3 pt-4 col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <span style={{ background: 'white', boxShadow: '0px 4px 4px 1px #a8bfd25c', borderRadius: '50%' }} className="p-2">
                            <i className="fas fa-comment-dollar fa-lg" style={{ color: '#ffa773' }} />
                        </span>
                    </div>
                    <div className="col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-dollar-sign fa-xs mr-1 " />
                            <span style={{ fontWeight: 500 }}>-1,000</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#ffa773' }}>
                                Expenses
                            </span>
                        </div>
                    </div>
                </div>
                <div className="balance-container col-12 col-sm-3 col-lg-4 my-2 pt-4 row justify-content-center">
                    <div className="pb-3 pt-4 col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <span style={{ background: 'white', boxShadow: '0px 4px 4px 1px #a8bfd25c', borderRadius: '50%' }} className="p-2">
                            <i className="fas fa-comment-dollar fa-lg" style={{ color: '#6ad6ff' }} />
                        </span>
                    </div>
                    <div className="col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-dollar-sign fa-xs mr-1" />
                            <span style={{ fontWeight: 500 }}>Gareeb</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#6ad6ff' }}>
                                Balance
                            </span>
                        </div>
                    </div>
                </div>
                <div className="revenue-container col-12 col-sm-3 col-lg-4 my-2 pt-4 row justify-content-center">
                    <div className="pb-3 pt-4 col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <span style={{ background: 'white', boxShadow: '0px 4px 4px 1px #a8bfd25c', borderRadius: '50%' }} className="p-2">
                            <i className="fas fa-comment-dollar fa-lg" style={{ color: '#00C9A1' }} />
                        </span>
                    </div>
                    <div className="col-auto col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-dollar-sign fa-xs mr-1" />
                            <span style={{ fontWeight: 500 }}>0</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#00C9A1' }}>
                                Revenues
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart-category m-3">
                <div className="chart" style={{ maxWidth: '550px', margin: '0 auto', maxHeight: '100px' }}>
                    <canvas id="myCategory" width={300} height={300} ></canvas>
                </div>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="chart-container p-2" style={{ maxWidth: '350px', margin: '0 auto', position: 'relative' }}>
                <div className="pt-4">
                    <div className="chart-name" style={{ position: 'absolute', top: '30px' }}>
                        <h5 style={{ fontWeight: 500 }}>Budget</h5>
                    </div>
                    <div className="p-4 pt-5">
                        <canvas id="myBudget" width={200} height={200} ></canvas>
                    </div>
                    <div className="budget-data-container d-flex justify-content-between">
                        <div className="budget-container pe-2 pb-3 d-flex flex-column align-items-center">
                            <h6 style={{ fontSize: '1rem', fontWeight: 600 }}>Monthly Limit</h6>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <span>$10,000</span>
                                </div>
                                {/* Button trigger modal */}
                                <div className="d-flex align-items-center">
                                    <button type="button" style={{ background: 'transparent', border: 'none' }} data-toggle="modal" data-target="#exampleModal">
                                        <i className="fas fa-edit icon-edit" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            {/* Modal */}
                            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Edit
                                                budget</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form action="/users/budget?_method=PUT" method="POST">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" name="budget" defaultValue={10000} min={1} id="exampleInputBudget1" />
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="submit" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="submit" className="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="remaining-container px-2 pb-3 d-flex flex-column align-items-center">
                            <h6 style={{ fontSize: '1rem', fontWeight: 600 }}>Remaining</h6>
                            <span>$9,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Budget;
