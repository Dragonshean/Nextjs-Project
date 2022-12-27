import Image from 'next/image'
// import dishImage from "/images/五更腸旺.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { closeModalProps, DishProps } from '../../pages/Menu/index';



const DisplayModal = ({ dish, closeModal }: DishProps & closeModalProps) => {
    
    console.log("Display", dish)

    // const { id:string, name:string, price_noon:string, price_night, img:string }[] = dishes

    const basePath = '/images/熱吧食材/'
    const imagePath = `${basePath}${dish}`

    return ( 
        <div className='dishModal'>
            <div className='left-img'>
                <Image alt='dish-img' 
                    src={imagePath} 
                    width={300} 
                    height={300} 
                    style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    boxShadow: '2px 2px 2px 0px rgb(58, 56, 56)' 
                    }} 
                />
            </div>
            <div className='right-text'>
                <h2>{dish.}</h2>
                <p>{`dishInfo`}</p>
                <p>{`平日午餐 NTD$ ${""}`}</p>
                <p>{`平日&假日 晚餐 NTD$ ${""}`}</p>
            </div>
            <button onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
     );
}
 
export default DisplayModal;