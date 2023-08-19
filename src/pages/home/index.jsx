import { Container, Brand, Menu, Search, Content, NewNote } from "./style"
import { Header } from "../../components/header"

export function Home() {
    return(
        <Container>
            <Header />
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Menu></Menu>
            <Search></Search>
            <NewNote></NewNote>
        </Container>
    )
}