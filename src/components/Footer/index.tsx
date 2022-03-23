import { Container, Content, Social } from "./style";
import { SocialIcon } from "assets";


export function Footer() {
    return (
        <Container>
            <Content>
                <div>
                    <h2>Liked what you see?</h2>
                    <p>Contact me!</p>
                </div>
                <Social>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:matheusburda@gmail.com">{SocialIcon("Email")}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/burdao?si=NOvM55qjSGKFkUryvmnwvg">{SocialIcon("Spotify")}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCrNDrGwDXmBErjp0BGqqOUw">{SocialIcon("Youtube")}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matheusburda/">{SocialIcon("Linkedin")}</a>
                </Social>
            </Content>
        </Container>
    )
}
