import * as C from './App.styles.js'
import memoryLogo from '../src/assets/logo.jpg'
import { InfoItem } from './components/InfoItem/index'
import { ItemGrid } from './components/ItemGrid/index.jsx'

function App() {

  return (
    <C.Container>
      <C.Infos>
        <C.LogoImg>
          <img src={memoryLogo} width="200px" alt="MemoryGameLogo" />
        </C.LogoImg>
        
        <C.spaceInfo>
          <InfoItem label="Tempo" className="label1" value="00:00"/>
          <InfoItem label="Moves" className="label2" value="0"/>
        </C.spaceInfo>

      <C.Button>Reiniciar</C.Button>
      </C.Infos>

      <C.spaceGrid>
        <ItemGrid/>
        <ItemGrid/>
        <ItemGrid/>
        <ItemGrid/>
        <ItemGrid/>
        <ItemGrid/>
        <ItemGrid/>
        <ItemGrid/>
        <ItemGrid/>
      </C.spaceGrid>
      
    </C.Container>
  )
}

export default App
