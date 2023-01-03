import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-column: repeat(5, 1fr)
    grid-template-row: 1fr;
    grid-column-gap: 2rem;
    padding: 1rem;
    padding-top: 2rem
    
    @media ${(props) => props.theme.breakpoints.sm}{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-row: repeat(2, 60px);
        grid-gap: 0.5rem
    }

`

const Header = () => {
    return (
        <div>
            <Container>
                <h1>Header</h1>
            </Container>
        </div>
    );
};

export default Header;