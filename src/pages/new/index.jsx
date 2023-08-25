import { Container,Form } from "./style"; 
import { Header } from "../../components/header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/textArea"

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
                    <h2>Links úteis</h2>

                    
                </Form>
            </main>

        </Container>
    )
}