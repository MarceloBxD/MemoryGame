import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid black;
    border-radius: 0.5em 0.5em 0.5em;
    padding: 2px 3px;
    justify-content: center;
    cursor: pointer;

    :hover{
        transform: scale(103%);
        transition: ease-in-out 0.4s linear;
    }
`

export const iconArea = styled.div`
`

export const Label = styled.div`
    font-size: 20px;
    font-weight: bold;
`

export const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 10px;
`