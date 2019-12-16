import React from 'react';
import { PaginationWrap, PaginationButton } from './styles';

const Pagination = props => {
    const { config, handleNextPage, handlePreviousPage } = props;

    return (
        <PaginationWrap>
            {config.previous && (
                <PaginationButton onClick={handlePreviousPage}>Previous</PaginationButton>
            )}
            {config.next && (
                <PaginationButton onClick={handleNextPage}>Next</PaginationButton>
            )}
        </PaginationWrap>
    );
};

export default Pagination;
