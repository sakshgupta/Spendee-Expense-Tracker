import React from 'react';

function Page() {
    return <div id="pagination" className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="/records?page=1&date=&category=" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                    </a>
                </li>
                <li className="page-item active"><a className="page-link" href="./index.html">1</a></li>
                <li className="page-item disabled">
                    <a className="page-link" href="/records?page=1&date=&category=" aria-label="Next">
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
}

export default Page;
