import * as C from './styles';
import nikeImg from '../../svgs/nike.png';
import { items } from '../../data/items'

export const GridItem = ({item, onClick}) => {
    return(
        <C.Container onClick={onClick}>
            {item.permanentShown === false && item.shown === false && 
                <C.Icon src={nikeImg} alt=""/>
            }
            {(item.permanentShown || item.shown === true) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt=""/>
            }
        </C.Container>
    );
}