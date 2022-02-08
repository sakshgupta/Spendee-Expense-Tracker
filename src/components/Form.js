import React from 'react';

function Form() {
    return <div className="mt-4" style={{ marginRight: '-30px', marginBottom: '80px' }}>
    {/* <form action="/records" className="input-group row form" onChange="submit();"> */}
    <form action="/records" className="input-group row form">
        <div className="col-sm-6 mb-3">
            <select className="custom-select" name="date">
                <option value="all">All Months</option>
                <option value="2022-2" selected>2022-2</option>
                <option value="2021-12">2021-12</option>
                <option value="2021-11">2021-11</option>
                <option value="2021-10">2021-10</option>
                <option value="2021-7">2021-7</option>
                <option value="2021-3">2021-3</option>
                <option value="2020-5">2020-5</option>
                <option value="2020-3">2020-3</option>
                <option value="2020-1">2020-1</option>
                <option value="2005-6">2005-6</option>
            </select>
        </div>
        <div className="col-sm-6">
            <select className="custom-select" name=" category">
                <option value selected>All Categories</option>
                <option value="Home">Home
                </option>
                <option value="Transportation">Transportation
                </option>
                <option value="Entertainment">Entertainment
                </option>
                <option value="Food">Food
                </option>
                <option value="Other">Other
                </option>
            </select>
        </div>
    </form>
</div>;
}

export default Form;
