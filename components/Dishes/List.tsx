import Item from './Item'
import { DishProps, dishesProps, popOutModalProps } from '../../pages/Menu/index';




const List = ({ dish, popOutModal }: DishProps & popOutModalProps ) => {

    // console.log("List", dish)

    return ( 
        <div className="list">
            {dish.map(({ id, name, img, file }:dishesProps) => (
                <Item
                key={id} 
                name={name}
                id={id} 
                img={img}
                file={file}
                popOutModal={popOutModal}
                /> 
            ))}
        </div>
    );
};

export default List