import { Container } from "./style";

export function ButtonText({title, isactive = false, ...rest}) {
    return (
        <Container 
        type="button" 
        $isactive={isactive.toString()} 
        {...rest} 
        >
            
            {title}
        </Container>
    )
}