import { Container, Brand, Menu, Search, Content, NewNote } from "./style"
import { Header } from "../../components/header"
import { ButtonText } from "../../components/ButtonText"
import { FiPlus } from "react-icons/fi"

export function Home() {
    return(
        <Container>
            <Header />
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Menu>
                <ButtonText title="Todos" $isactive/>
                <ButtonText title="Frontend"/>
                <ButtonText title="Node"/>
                <ButtonText title="React"/>
            </Menu>

            <Search></Search>

            <Content></Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}