import styled from 'styled-components';

export const StyledEmailRow = styled.div`
    font-family: sans-serif;
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid whitesmoke;
    cursor: pointer;
    z-index: 999;
    :hover {
        border-top: 1px solid whitesmoke;
        box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
    }
`;
export const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
export const Title = styled.h3`
    color: black;
    font-size: 13px;
    padding-left: 15px;
    flex: 0.2;
`;
export const Message = styled.div`
    color: black;
    display: flex;
    flex: 0.7;
    align-items: center;
    font-size: 13px;

    h4 {
        width: 400px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5px;
        padding-right: 5px;
    }
`;

export const Description = styled.span`
    font-weight: 400;
    color: grey;
`
export const Time = styled.div`
    padding-right: 5px;
    font-size: 12px;
    font-weight: bold;
`;

