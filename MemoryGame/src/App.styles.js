import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 750px;
    display: flex;
    margin: 0 auto;
    margin-top: 100px;s
`
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LogoImg = styled.div`

`

export const Grid = styled.div`
    width: 750px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-left: 30px;
    align-items: center;
    justify-content: center;    
`

export const spaceInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`