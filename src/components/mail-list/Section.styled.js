import styled from "styled-components";


export const StyledSection = styled.div` 
    border-bottom: 3px solid ${({color, selected})=> selected?color:'white'};
    color: ${({selected,color})=> selected? color:'grey'};
    cursor: pointer;
    min-width: 200px;
    padding: 0 15px;
    display: flex;
    align-items: center;

    background-color: ${({selected})=> selected ? 'whitesmoke':'white'};
    border-width: 3px;

    :hover{
        background-color: whitesmoke;
        border-bottom: 3px solid ${({color})=> color};
    }


`