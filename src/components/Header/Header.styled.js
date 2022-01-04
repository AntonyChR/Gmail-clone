import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;

`
export const StyledImg = styled.img`
    object-fit: contain;
    height: 80px;
    margin-left: 5px;
`

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;

    .menu-icon{
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        :hover{
            background-color: #a7a7a7;
        }
    }
`

export const SearchBar  = styled.div`
    display: flex;
    align-items: center;
    flex: 0.7;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    .row-icon, .search-icon{
        color: grey;
    }

    input{
        border: none;
        width: 100%;
        padding: 10px;
        outline-width: 0;
        font-size: medium;
        background-color: transparent;
    }

`

export const AcountMenu = styled.div`
    color: grey;
    display: flex;
    align-items: center;
    padding-right: 20px;
    gap: 15px;
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`