import { Container, Form, Avatar } from "./style";
import { FiArrowLeft } from "react-icons/fi"
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/button"

export function Profile({icon: Icon}) {
    return (
        <Container>
            <header>
                <a href="">
                    <FiArrowLeft />
                </a>
            </header>

            <Form action="">
                <Avatar >
                    <img src="https://github.com/drigodeveloper.png" alt="Foto do usuario" />
                    <label htmlFor="avatar">
                    <FiCamera />
                    <input id="avatar" type="file"/>
                    </label>

                </Avatar>
                <Input 
                placeholder="Nome"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}