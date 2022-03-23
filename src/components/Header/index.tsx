import { Container, Content, ImgDiv } from "./style";


export function Header() {
    return (
        <Container>
            <Content>
                <ImgDiv>
                    <div></div>
                    <img src="https://avatars.githubusercontent.com/u/48896951?v=4" alt="Portrait " />
                </ImgDiv>
                <div className="header-text">
                    <h1 className="fadein">Matheus Burda</h1>
                    <ul>
                        <li className="fadein">I'm a Computer Engineering student at Technological Federal University of Paraná.</li>
                        <li className="fadein">I'm passionate about programming, electronics and now started mountain biking.</li>
                        <li className="fadein">I'm currently learning web development.</li>
                        <li className="fadein">I'm 22 years old and live in Curitiba - Paraná, Brazil.</li>
                    </ul>
                </div>
            </Content>

        </Container>
    )
}
