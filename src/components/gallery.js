import React from 'react';

const Styles = styled.div`
    .gallery {
        margin: 5px;
        border: 1px solid #ccc;
        float: left;
        width: 180px;
    }
    .gallery img {
        width: 100%;
        height: auto;
    }
`;

export const gallery = () => (
    <Styles>
        <div className="gallery"></div>

    </Styles>
)

