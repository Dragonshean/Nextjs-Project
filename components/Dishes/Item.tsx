import Image from 'next/image'
import Link from 'next/link'


interface dishProps {
    id:string;
    name:string;
    price_noon:string;
    price_night:string;
    img:string;
}


const Item = ( { id, name, price_noon, price_night, img }:dishProps ) => {

    
    
    return (
        <div className="item">
          <div>
          <Link href={`//${id}`}>
                <Image alt="img"
                    src={img}
                    width={120}
                    height={120}
                    style={{
                    maxWidth: '100%',
                    height: 'auto',
                    }} className=""/>
                </Link>
          </div>
          <div>
            <p>{name}</p>
            <p>{`平日午餐NTD$ ${price_noon}`}</p>
            <p>{`平日&假日 晚餐 NTD$ ${price_night}`}</p>
          </div>
        </div>
      );
    };
    
    export default Item;