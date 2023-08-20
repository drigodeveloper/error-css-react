import { Container } from "./style";
import { Tags } from "../tags"

export function Note({data, ...rest}) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            {
                data.tags && 
                <footer>
                    {
                        data.Tags.map( Tags => <Tags key={Tags.id} title={Tags.name}/> )
                    }
                </footer>
            }
        </Container>
    )
}