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
    justify-content: center;
`

export const Button = styled.div`
    border-radius: 8px;
    margin-top: 30px;
    padding: 5px;
    cursor: pointer;
    background-color: #0f9;
    display: flex;
    justify-content: center;
    color: #fff;
    :hover{
        opacity: 0.4;
        transition: ease-in-out 0.2 linear;
    }
`

export const spaceGrid= styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 50px;
`
export const LogoImg = styled.div`

`

export const spaceInfo = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`