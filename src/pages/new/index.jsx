import { Container,Form } from "./style"; 
import { Header } from "../../components/header"
import { Input } from "../../components/Input"

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

                    <Input />
                    

                    <h2>Links úteis</h2>

                    
                </Form>
            </main>

        </Container>
    )
}