import styled from 'styled-components';

export const StyledSidebarOption = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: #818181;
    font-family: sans-serif;
    span {
        padding: 5px;
    }
    h3 {
        flex: 1;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
    }

    p {
        display: ${({selected})=> selected ? 'inline' : 'none'};
        font-weight: 300;
    }

    :hover {
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 800;

        p {
            display: inline;
        }
    }
    background-color: ${({selected})=> selected ? '#fcecec' : ''};
    color: ${({selected})=> selected ? '#c04b37' : ''};
    font-weight: ${({selected})=> selected ? '800' : ''};
`;

export const StyledSidebarFooter = styled.div`
    color: grey;
    span:hover{
        cursor: pointer;
    }

    .footer-icons{
        display: flex;
        justify-content: space-between;
    }

    
`