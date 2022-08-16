import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    align-items: center;
    border: 3px solid black;
    border-radius: 0.5em 0.5em 0.5em;
    padding: 2px 3px;
    justify-content: center;
    cursor: pointer;
    background-color: #1550FF;
    color: #FFFFFF;
    :hover{
        transform: scale(103%);
        transition: ease-in-out 0.4s linear;
    }
`

export const Label = styled.div`
    font-size: 20px;
    font-weight: bold;
`