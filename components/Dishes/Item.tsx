import Image from 'next/image'
import Link from 'next/link'
import { dishesProps, popOutModalProps } from '../../pages/Menu/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft, faHandPointRight } from '@fortawesome/free-regular-svg-icons'



const Item = ( { id, name, img, file, popOutModal }: dishesProps & popOutModalProps ) => {

    //TODO web path local host is temporary for test
    // const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    //   return `https://localhost:3000/?${src}?w=${width}&q=${quality}`;
    // }
    const basePath = `/images/${file}/`
    const imagePath = `${basePath}${img}`

    const nowId = parseInt(id); 

    // console.log("Item", file)

    return (
        <div className="item">
          <div className='item-image'>
              <Image alt="img"
                  id={id}
                  key={id}
                  //TODO 要試著解決 導入json到 src 的方法  !!解決了 多了一個斜線
                  src={imagePath}
                  width={180}
                  height={180}
                  quality={100}
                  priority={true}
                  style={{
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  }} className="dish-img"/>
          </div>
          <div className='item-info'>
            <h4>{name}</h4>
            <button className='item-info-btn' key={id} onClick={() => {popOutModal(nowId)} }>
              <FontAwesomeIcon className="fa-regular fa-copyright"
                    icon={ faHandPointRight } />
                    食材資訊
              <FontAwesomeIcon className="fa-regular fa-copyright"
                    icon={ faHandPointLeft } />
            </button>
          </div>
        </div>
      );
    };
    
    export default Item;