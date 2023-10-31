import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container,Form } from "./style"; 
import { Header } from "../../components/header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/textArea"
import { NoteItem } from "../../components/noteItem"
import { Section } from "../../components/section"
import { Link } from "react-router-dom"
import { Button } from "../../components/button"

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newlink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    const navigate = useNavigate();


    function handleAddLink() {
        setLinks(prevState => [...prevState, newlink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTags() {
        setTags(prevTags => [...prevTags, newTags])
    }

    function handleRemoveTags(deleted) {
        setTags(prevState => prevState.filter(tags => tags !== deleted));

    }

    async function handleNewNote() {
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })
        
        alert("Nota criada com sucesso")
        navigate("/")
    }


    return(
        <Container>
            <Header />


            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input 
                    placeholder="Título" 
                    onChange={e => setTitle(e.target.value)}
                    />
                    
                    <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}

                    />
                    <Section title="Links úteis">
                        
                        {
                            links.map((link, index) => (
                                <NoteItem  
                                key={String(index)}
                                value={link}
                                onClick={() => handleRemoveLink(link)}
                            
                                />

                            ))
                        }

                                <NoteItem  
                                isNew
                                placeholder="Novo Link"
                                value={newlink}
                                onChange={e => setNewLink(e.target.value)}
                                onClick={handleAddLink}
                            
                                />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tags, index) => (
                                    <NoteItem 
                                    key={String(index)}
                                    value={tags} 
                                    onClick={() => handleRemoveTags(tags)}
                                    
                                    />

                                ))
                            }

                        <NoteItem 
                        isNew 
                        placeholder="Nova Tag" 
                        value={newTags}
                        onChange={e => setNewTags(e.target.value)}
                        onClick={handleAddTags}
                        />
                        </div>
                    </Section>

                    <Button 
                    title="Salvar" 
                    onClick={handleNewNote}
                    />


                    
                </Form>
            </main>

        </Container>
    )
}