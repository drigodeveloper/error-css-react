import { Container, Form } from "./style";
import { Input } from "../../components/Input"
import { Button } from "../../components/button"

export function Signin() {
    return(
    <Container>
    <Form >

       <h1>Rocket Notes</h1>
       <p>Aplicação para salvar e gerenciar seus links úteis.</p>
       <h2>Faça seu login</h2>

       <Input 
       placeholder="E-mail"
       />

        <Input 
       placeholder="Senha"
       />

        <Button title="Entrar" />

        <a href="">Criar conta</a>
       </Form>
    </Container>
    )
}


