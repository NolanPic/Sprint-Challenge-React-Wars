import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    margin: 0 auto;

    p {
        font-size: 1.8rem;
    }
`;

export const CardList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    width: 30%;
    background-color: #fff;
    border-radius: 0.7rem;
    padding: 2rem;
    margin-bottom: 4rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;

export const PaginationButton = styled.div`
    border: 0;
    font-size: 2rem;
    
`;
