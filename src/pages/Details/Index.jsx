import { Container, Links } from "./style"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { Section } from "../../components/section"
import { Tags } from "../../components/tags"
import { ButtonText } from "../../components/ButtonText"

export function Details() { 
  
  return(
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="https://github.com/drigodeveloper">Link 1</a>
            <a href="https://www.linkedin.com/in/rodrigocamposm/">Link 2</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tags title="express" />
        <Tags title="Node" />
      </Section>
  
  
      <Button title="Voltar" />

      <ButtonText title="Excluir a nota" />

      

    </Container>
    
  )
};



