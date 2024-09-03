import React from 'react';
import "./pagination.css"

const Pagination = () => {
    return (
        <div className="pagination">
           <div className="page-previous">previous</div>
           {[...Array(10).keys()].map((num) => <div key={num} className="page-num">{num + 1}</div>)}
           <div className="page-next">next</div>
        </div>
    );
}

export default Pagination;
