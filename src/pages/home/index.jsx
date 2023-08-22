import { Container, Brand, Menu, Search, Content, NewNote } from "./style"
import { Header } from "../../components/header"
import { ButtonText } from "../../components/ButtonText"
import { FiPlus, FiSearch } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Section } from "../../components/section"
import { Note } from "../../components/Note"


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

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                <Note data={{ 
                    title: "React Modal",
                    Tags: [
                        { id: "1", name: "React" },
                        { id: "2", name: "nodejs" }

                    
                ]
                    
                    }}
                    />
                    
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}