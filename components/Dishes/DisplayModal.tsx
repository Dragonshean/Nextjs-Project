import Image from 'next/image'
// import dishImage from "/images/五更腸旺.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { closeModalProps, DishesListProps } from '../../pages/Menu/index';



const DisplayModal = ({dishes, closeModal}: DishesListProps & closeModalProps) => {
    
    console.log(dishes)

    // const { id:string, name:string, price_noon:string, price_night, img:string }[] = dishes

    return ( 
        <div className='dishModal'>
            <div className='left-img'>
                <Image alt='dish-img' 
                    src="/images/熱吧食材/啤酒蛤蜊.jpg" 
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
                <h2>{`dishName`}</h2>
                <p>{`dishInfo`}</p>
            </div>
            <button onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
     );
}
 
export default DisplayModal;