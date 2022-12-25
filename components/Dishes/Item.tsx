import Image from 'next/image'
import Link from 'next/link'
import { dishesProps, popOutModalProps } from '../../pages/Menu/index';
import type { ImageLoaderProps } from 'next/image';



const Item = ( { name, id, price_noon, price_night, img, popOutModal }: dishesProps & popOutModalProps ) => {

    //TODO web path local host is temporary for test
    // const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    //   return `https://localhost:3000/?${src}?w=${width}&q=${quality}`;
    // }


    return (
        <div className="item">
          <div className='item-image'>
            <Link href="" onClick={popOutModal}>
              <Image alt="img"
                  id={id}
                  key={id}
                  //TODO 要試著解決 導入json到 src 的方法
                  src="/images/熱吧食材/五更腸旺.jpg"
                  width={120}
                  height={120}
                  quality={100}
                  style={{
                  maxWidth: '100%',
                  height: 'auto',
                  }} className="dish-img"/>
            </Link>
          </div>
          <div className='item-info'>
            <h4>{name}</h4>
            <p>{`平日午餐 NTD$ ${price_noon}`}</p>
            <p>{`平日&假日 晚餐 NTD$ ${price_night}`}</p>
          </div>
        </div>
      );
    };
    
    export default Item;