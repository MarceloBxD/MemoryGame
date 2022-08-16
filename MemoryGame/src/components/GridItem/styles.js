import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.showBackGround ? '#1550FF' : '#E2E3E3'}
    width: 100px;
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const Icon = styled.img` 
    width: 70px;
    height: 70px;
    object-fit: contain;
    margin: 20px;
    opacity: {props => props.opacity ?? 1}
`