import styled from 'styled-components';

export const StyledSendMail = styled.div`
    position: absolute;
    bottom: 0;
    right: 50px;
    background-color: #404040;
    width: 30%;
    height: 45%;
    max-width: 500px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;
export const SendMailHeader = styled.div`
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;
    h3 {
        color: whitesmoke;
        font-size: 13px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex:1;
    flex-direction: column;
    input{
        height: 30px;
        padding: 10px;
        border:none;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        outline: none;
    }
`;
export const Message = styled.input`
    flex: 1;

 `
export const Subject = styled.input` `
export const To = styled.input` `


export const SendMailOptions = styled.div``;

export const SendButton = styled.button`
    padding: 7px;
    border-radius: 5px;
    color: whitesmoke;
    border: none;
    background-color: #3079ed;
    margin: 15px;
    cursor: pointer;
`;

export const SendMailError = styled.p` 
    margin: 0;
    background-color: white;
    color: red;
    text-align: right;
    padding: 2px;

`