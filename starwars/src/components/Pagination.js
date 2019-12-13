import React from 'react';

const Pagination = props => {
    const { config, handleNextPage, handlePreviousPage } = props;

    return (
        <div className="pagination-wrap">
            {config.previous && (
                <button onClick={handlePreviousPage}>Previous</button>
            )}
            {config.next && (
                <button onClick={handleNextPage}>Next</button>
            )}
        </div>
    );
};

export default Pagination;
