import { Container, Links, Content } from "./style"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useParams, useNavigate } from "react-router-dom"
import { Section } from "../../components/section"
import { Tags } from "../../components/tags"
import { ButtonText } from "../../components/ButtonText"


export function Details() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null); 

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }


  
  useEffect(() => {

  async function fetchNotes() {
    const response = await api.get(`/notes/${params.id}`)
    setData(response.data)
  }
  fetchNotes();
  }, [])
  return(
    <Container>
      <Header />

           { 
           data &&
           <main>
              <Content>

                <h1>{data.title}</h1>
                <p>{data.description}</p>


          {
            data.links &&
            <Section title="Links úteis">
              <Links>
              {
                data.links.map(link => (
                <li key={String(link.id)}>
                  <a href={link.url} target="_blank">
                    {link.url}
                  </a>
                  </li>
                ))
                  
                    
              }
              </Links>
            </Section>
          }     

                
                  
          {
             data.tags && 
            <Section title="Marcadores">
              {
                data.tags.map(tag => (
                  <Tags 
                  key={String(tag.id)}
                  title={tag.name} 
                  />

                  ))
              }
            </Section>
          }
        
        
            <Button title="Voltar" onClick={handleBack}/>

            <ButtonText title="Excluir a nota" onClick={handleRemove} />

              </Content>
            </main>
            }
      

    </Container>
    
  )
};



