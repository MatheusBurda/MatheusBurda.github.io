import { GlobalStyle } from "./styles/global";
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Portfolio />
            <Footer />
        </>
    );
}
