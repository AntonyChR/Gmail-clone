import styled from 'styled-components';

export const StyledLogin = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Img = styled.img`
    object-fit: contain;
    height: 200px;
`;

export const LoginButton = styled.div`
    background-color: #2a3eb1;
    border-radius: 5px;
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h1{
        margin: 0;
        font-size: 2rem;
    }
;
`;
