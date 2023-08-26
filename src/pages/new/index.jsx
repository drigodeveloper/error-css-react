import { Container,Form } from "./style"; 
import { Header } from "../../components/header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/textArea"
import { NoteItem } from "../../components/noteItem"
import { Section } from "../../components/section"
import { Button } from "../../components/button"

export function New() {
    return(
        <Container>
            <Header />


            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="">Voltar</a>
                    </header>

                    <Input placeholder="Título" />
                    
                    <TextArea placeholder="Observações" />
                    <Section title="Links úteis">
                        <NoteItem value="https://github.com/drigodeveloper" />
                        <NoteItem isNew placeholder="Novo Link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        <NoteItem value="React" />
                        <NoteItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />


                    
                </Form>
            </main>

        </Container>
    )
}