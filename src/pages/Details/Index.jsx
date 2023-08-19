import { Container, Links, Content } from "./style"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { Section } from "../../components/section"
import { Tags } from "../../components/tags"
import { ButtonText } from "../../components/ButtonText"


export function Details() { 
  
  return(
    <Container>
      <Header />

      <main>
        <Content>

          <h1>Introdução ao React</h1>
          <p>React é uma biblioteca de JavaScript de código aberto e eficiente para a criação de interfaces de 
            usuário. Desenvolvido pelo Facebook, o React permite criar componentes reutilizáveis que podem ser 
            combinados para formar interfaces de usuário complexas.Uma das principais características do React é 
            sua abordagem de renderização virtual. Em vez de atualizar a interface de usuário inteira quando 
            ocorre uma alteração, o React atualiza apenas os componentes que foram afetados. Isso resulta em um 
            desempenho excelente e uma experiência de usuário fluida.
          </p>


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

        </Content>
      </main>
      

    </Container>
    
  )
};



