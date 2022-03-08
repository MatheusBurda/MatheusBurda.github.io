import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5rem;

    img {
        max-width: 40rem;
        margin-left: 1rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
    }

    p {
        text-align: justify;
        margin-top: 1rem;
    }

    a {
        margin-top: 3rem;
        font-size: 1.2rem;
        
        & + a{
            margin-top: 1rem;
        }
    }

`;

export const TechIconDiv = styled.div`

    display: inline-flex;
    justify-content: left;

    margin-top: 3rem;

    .tech-icon {
        fill: var(--text-color);
        width: 3rem;

        &.tech-icon {
            margin-right: 1rem;
        }
    }
`;
