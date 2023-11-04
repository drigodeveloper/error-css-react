import { api } from '../../services/api'
import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input"
import { Button } from "../../components/button"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



export function Signup({icon: Icon}) {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos para se cadastrar")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.mensage)
            }else{
                alert("Não foi possível cadastrar")
            }
        })
    }


    return(
    <Container>
<Background />
    <Form >

       <h1>Rocket Notes</h1>
       <p>Aplicação para salvar e gerenciar seus links úteis.</p>
       <h2>Faça seu login</h2>

       <Input 
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
       />

        <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
       />

        <Input 
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setpassword(e.target.value)}
       />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">Voltar para login</Link>
       </Form>

    </Container>
    )
}


