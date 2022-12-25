import Item from './Item'
import { DishesListProps, popOutModalProps } from '../../pages/Menu/index';




const List = ({dishes, popOutModal}: DishesListProps & popOutModalProps) => {
    return ( 
        <div className="list">
            {dishes.map(({ id, name, price_noon, price_night, img }) => (
                <Item
                key={id} 
                name={name} 
                id={id} 
                price_noon={price_noon} 
                price_night={price_night} 
                img={img}
                popOutModal={popOutModal}
                /> 
            ))}
        </div>
    );
};

export default List