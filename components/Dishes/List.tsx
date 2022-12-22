import Item from './Item'

interface dataProps {
    dishData:string[];
}



const List = ({ dishData }:dataProps) => {
    return ( 
        <div className="list">
            {dishData.map((item:string) => {
                const { id, name, price_noon, price_night, img } = item ;
                return (
                    <Item 
                    key={id}
                    id={id}
                    name={name}
                    price_noon={price_noon}
                    price_night={price_night}
                    img={img}
                    />
                );
            })}
        </div>
    );
};

export default List