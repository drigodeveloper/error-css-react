import { FiPlus, FiX } from "react-icons/fi"
import { Container } from "./styled"

export function NoteItem({ isNew, value, onClick, ...rest }) {
    return (
        <Container>
            <input 
            type="text"
            value={value} 
            readOnly={!isNew}
            {...rest}
            />

            <button 
            onClick={onClick}
            type="button"
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
                
            

            
        </Container>
    )
}