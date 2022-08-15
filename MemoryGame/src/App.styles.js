import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    display: flex;
    margin: 0 auto;
`
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
`

export const Button = styled.div`
    border-radius: 8px;
    padding: 5px;
    cursor: pointer;
    background-color: aqua;
    display: flex;
    justify-content: center;
    color: #fff;
    :hover{
        opacity: 0.5;
        transition: all 0.2s linear;
    }
`

export const spaceGrid= styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`
export const LogoImg = styled.div`

`

export const spaceInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`