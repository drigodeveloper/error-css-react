import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input"
import { Button } from "../../components/button"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

export function Signin() {
    return(
<Container>
    <Form >

       <h1>Rocket Notes</h1>
       <p>Aplicação para salvar e gerenciar seus links úteis.</p>
       <h2>Faça seu login</h2>

    <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}
    />

    <Input 
        placeholder="Senha"
        type="text"
        icon={FiLock}
    />

    <Button title="Entrar" />

    <Link to="/signup">Criar conta</Link>
    </Form>

    <Background />
</Container>
    )
}


