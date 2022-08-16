import * as C from './App.styles.js'
import { useEffect, useState } from 'react'
import { InfoItem } from './components/InfoItem/index'
import { GridItem } from './components/GridItem'
import { Button } from './components/Button'
import { items } from './data/items'
import ResetIcon from './assets/refresh-icon-free-vector.jpg'
import memoryLogo from '../src/assets/logo.jpg'
import { formatTipeElapsed } from './helpers/formatTipeElapsed'

function App() {

  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [showCount, setShowCount] = useState(0);
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => resetAndCreateGrid(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing){
        setTimeElapsed(timeElapsed + 1);
      }
  }, 1000)
  return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  const handleItemClick = (index) => {
    
  }

  const resetAndCreateGrid = () => {

  // Zerando o jogo:
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);
  

  let tmpGrid = [];
  
  for(let i = 0; i < (items.length * 2); i++){
    tmpGrid.push({item: null, shown: true, permanentShown: false});
  }

  for(let w = 0; w < 2; w++){
    for(let i = 0; i < items.length; i++){
      let pos = -1;
        while(pos < 0 || tmpGrid[pos].item !== null){
          pos = Math.floor(Math.random() * (items.length * 2))
        } 
    tmpGrid[pos].item = i;
  }
}

    // Colocando os itens nos seus devidos lugares
    setGridItems(tmpGrid);

  // Começando o jogo caso nao esteja rodando
    setPlaying(true);
  }

  return (
    <C.Container>
      <C.Infos>
        <C.LogoImg>
          <img src={memoryLogo} alt="MemoryGameLogo" />
        </C.LogoImg>
        
        <C.spaceInfo>
          <InfoItem label="Time" className="label1" value={formatTipeElapsed(timeElapsed)}/>
          <InfoItem label="Moves" className="label2" value="0"/>
        </C.spaceInfo>

        <Button icon={ResetIcon} label="Reiniciar" onClick={resetAndCreateGrid}/>
      </C.Infos>

      <C.Grid>
        {gridItems.map((item, index) => (
          <GridItem 
            key={index}
            item = {item}
            onClick = {() => {handleItemClick(index)}}
            />
          ))}
      </C.Grid>
      
    </C.Container>
  )
}

export default App
