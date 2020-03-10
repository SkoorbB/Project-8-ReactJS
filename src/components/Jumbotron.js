import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div``;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome To TrendGetters</h1>
                <p>Come in and see which shows and movies are trending</p>

            </Container>
        </Jumbo>
    </Styles>

)
