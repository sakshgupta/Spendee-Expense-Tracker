import React from 'react';

function Table(props) {
    return (
        <React.Fragment>
            <tr>
                <td className="column1">{props.name}</td>
                <td className="column2">{props.date}</td>
                <td className="column3">{props.price}</td>
                <td className="column4">{props.cat}</td>
            </tr>
        </React.Fragment>
    );
}

export default Table;
