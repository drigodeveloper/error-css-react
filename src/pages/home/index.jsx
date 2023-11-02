import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { Container, Brand, Menu, Search, Content, NewNote } from "./style"
import { Header } from "../../components/header"
import { ButtonText } from "../../components/ButtonText"
import { FiPlus, FiSearch } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Section } from "../../components/section"
import { Note } from "../../components/Note"


export function Home() {
    const [tags, setTags] = useState([]);
    const [ tagsSelected, setTagsSelected] = useState([]);
    const [ search, setSearch] = useState("");
    const [ notes, setNotes] = useState([]);

    function handleTagSelected(tagName) {

        if(tagName === "all") {
            return setTagsSelected([]);
        }
        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        }else{
            setTagsSelected(prevState => [...prevState, tagName])
        }


    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");

            setTags(response.data)
        }

        fetchTags();
    }, [])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data)
        }

        fetchNotes();
    }, [tagsSelected, search])
    return(
        <Container>
            <Header />
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Menu>
            <li>
                <ButtonText 
                title="Todos" 
                onClick={() => setTagsSelected("all")}
                $isActive={tagsSelected.length === 0}
                /></li>

                {
                    tags && tags.map(tag => (
                    <li key={String(tag.id)} >
                        
                        <ButtonText
                        title={tag.name}
                        onClick={() => handleTagSelected(tag.name)}
                        $isActive={tagsSelected.includes(tag.name)}
                        />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                placeholder="Pesquisar pelo título" 
                icon={FiSearch}
                onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                {
                    notes.map(note => (

                        <Note 
                        key={String(note.id)}
                        data={note}
                        />
                    ))
                        
                        }
                        
                        
                    </Section>
                </Content>
    
                <NewNote to="/new">
                    <FiPlus />
                    Criar nota
                </NewNote>
            </Container>
        )
    }

                    