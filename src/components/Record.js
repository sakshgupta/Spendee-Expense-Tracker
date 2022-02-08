import React from 'react';

function Record() {
    return <div>
        <div className="mx-2 mb-3 d-flex justify-content-end">
            <small style={{ fontWeight: 500 }}>Found 1 records</small>
        </div>
        <div style={{ marginLeft: '-15px', marginRight: '-15px' }}>
            <div className="row flex-md-nowrap py-2 record" style={{ margin: 0 }}>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <i className="fas fa-grin-beam fa-2x record-icon" />
                </div>
                <div className="col-3 pl-3">
                    <h5 className="record-name">Movie</h5>
                    <small>2022-02-01</small>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <div className="d-flex flex-column align-items-end">
                        <h5 className="record-amount">₹-1,000</h5>
                        <small className="text-muted">dsd</small>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <a href="/records/61f91b3877b47e0004bbcf28/edit?type=expense" className="mr-2"><i className="fas fa-edit icon-edit" /></a>
                    {/* <form method="POST" action="/records/61f91b3877b47e0004bbcf28?_method=DELETE" className="record-delete" onSubmit="return checkDelete()" style={{ margin: 0 }} */}
                    <form method="POST" action="/records/_method=DELETE" className="record-delete" style={{ margin: 0 }}>
                        <button type="submit" className="record-deleteBtn"><i className="fas fa-trash-alt icon-delete" /></button>
                    </form>
                </div>
            </div>
        </div>
    </div>;
}

export default Record;
