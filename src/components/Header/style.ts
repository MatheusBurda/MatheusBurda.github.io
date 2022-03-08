import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    background: var(--background-light);
`;

export const Content = styled.div`
    margin: 0 auto;
    width: 1000px;
    display: flex;
    flex-direction: row;
    padding: 3rem;
    justify-content: center;
    align-items: center;

    img {
        max-width: 20rem;
        outline: 4px solid #FFF;
        outline-offset: -1rem;
    }

    h1 {
        font-size: 3rem;
        text-align: center;
    }

    p {
        text-align: justify;
        margin-top: 1rem;
    }

    div {
        padding: 2.5rem;
        margin-left: 3rem;
    }

`