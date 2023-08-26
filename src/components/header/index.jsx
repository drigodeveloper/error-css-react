import { RiShutDownLine } from "react-icons/ri";


import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
    <Container>
        <Profile to="/profile">
        <img src="https://github.com/drigodeveloper.png" alt="imagem de perfil do usuario" />

        <div>
            <span>Bem-vindo</span>
            <strong>Rodrigo Campos</strong>
        </div>  
        </Profile>

        <Logout>
            <RiShutDownLine />
        </Logout>
    </Container>
    );
}