import styled from "styled-components";

export const StyledEmailList = styled.div` 
    color: grey;
    flex: 1;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const Settings  = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 999;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    
    .settings-left, .settings-right{
        display: flex;
        align-items: center;
        gap: 10px;
    }
`
export const Sections = styled.div` 
    position: sticky;
    top: 0;
    display: flex;
    border-bottom: 1px solid whitesmoke;
    background-color: #fff;
    z-index: 999;
`

export const List = styled.div` 

`