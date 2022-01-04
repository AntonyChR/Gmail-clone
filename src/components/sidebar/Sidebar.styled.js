import styled from 'styled-components';

export const StyledSidebar = styled.div`
    flex:0.3;
    max-width: 200px;
    padding-right: 20px;
`;

export const ComposeButton = styled.div`
    width: 90px;
    margin-top: 15px;
    margin-bottom: 15px;
    text-transform: capitalize;
    padding: 15px;
    margin-left: 10px;
    display: flex;
    color: gray;
    align-items: center;
    border-radius: 30px;
    border: none;
    transition: background-color 0.2s ease;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    :active {
        background-color: #d3d3d3;
        cursor: pointer;
    }
`;
