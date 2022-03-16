import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    height: 100%;
    background: var(--background-light);
`;

export const Content = styled.div`
    margin: 0 auto;
    width: 1000px;
    display: flex;
    flex-direction: row;
    padding: 5rem 0;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    h1 {
        font-size: 3rem;
        text-align: left;
        margin-left: 1rem;
    }
    
    p {
        text-align: justify;
        margin-top: 1rem;
    }
    
    .header-text {
        margin-left: 3rem;
    }
    
`;


export const ImgDiv = styled.div`
    position: relative;
    width: 20rem;
    height: 20rem;
    
    div {
        width: 20rem;
        height: 20rem;
        background: var(--gradient);
    }
    
    img {
        position: absolute;
        top: -1.5rem;
        left: 1.5rem;
        width: 20rem;
    }

`