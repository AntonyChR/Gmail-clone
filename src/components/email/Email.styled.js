import styled from 'styled-components';

export const StyledEmail = styled.div`
    flex: 1;
    background-color: whitesmoke;
`;

export const Tools = styled.div`
    color: grey;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 5px 0;

    span {
        padding: 0 15px;
    }
`;
export const EmailBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
    background-color: white;
    padding: 20px;
    height: 100vh;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;
export const EmailHeader = styled.div`
    display: flex;
    padding: 20px;;
    align-items: center;
    border-bottom: 2px solid whitesmoke;
    position: relative;

    h2{
        font-weight: 400;
        margin:0 20px 0 0;
    }

    p{
        margin: 0;
    }

    .time{
        position: absolute;
        right: 0px;
        top: 24px;
        font-size: 17px;
        color: grey;
    }

`;

export const EmailMessage = styled.div`
    p{
        padding: 10px;
        margin-right: 20px;
        overflow-wrap: break-word;
    }
`;
