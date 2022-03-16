import { Container, Content, ImgDiv } from "./style";


export function Header() {
    return (
        <Container>
            <Content>
                <ImgDiv>
                    <div></div>
                    <img src="./images/retrato.jpeg" alt="Portrait " />
                </ImgDiv>
                <div className="header-text">
                    <h1>Matheus Burda</h1>
                    <ul>
                        <li>I'm a Computer Engineering student at Technological Federal University of Paraná.</li>
                        <li>I'm passionate about programming, electronics and now started mountain biking.</li>
                        <li>I'm currently learning web development.</li>
                        <li>I'm 22 years old and live in Curitiba - Paraná, Brazil.</li>
                    </ul>
                </div>
            </Content>

        </Container>
    )
}
