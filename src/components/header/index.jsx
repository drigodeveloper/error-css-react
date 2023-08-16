import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
    <Profile>
      <img src="https://github.com/drigodeveloper.png" alt="imagem de perfil do usuario" />
    </Profile>

    <div>
        <span>Bem-vindo</span>
        <strong>Rodrigo Campos</strong>
    </div>
        </Container>
    );
}