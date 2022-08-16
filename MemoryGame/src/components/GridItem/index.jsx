import * as C from './styles';
import reactImg from '../../svgs/react.png'
import { items } from '../../data/items'

export const GridItem = ({item, onClick}) => {
    return(
        <C.Container
            showBackground={item.permanentShown || item.shown === true}
            onClick={onClick}>

            {item.permanentShown === false && item.shown === false && 
                <C.Icon src={reactImg} alt=""/>
            }
            {(item.permanentShown || item.shown === true) && item.item !== null &&
                <C.Icon src={items[item.item].icon} opacity = {.1} alt=""/>
            }
        </C.Container>
    );
}