import { StyledSection } from "./Section.styled"

const Section = ({icon, title, color, selected=false}) => {
    return (
        <StyledSection selected={selected} color={color}>
            <span className='material-icons'>{icon}</span>
            <h4>{title}</h4>
        </StyledSection>
    )
}

export default Section
