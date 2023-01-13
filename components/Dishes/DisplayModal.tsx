import Image from 'next/image'
// import dishImage from "/images/五更腸旺.jpg";
import { useState } from "react";
import Overlay from "../Overlay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { closeModalProps, DetailsProps } from '../../pages/Menu/index';





const DisplayModal = ({ details, closeModal }: closeModalProps & DetailsProps) => {
    
    console.log("DisplayPage", details)

    // const { id:string, name:string, price_noon:string, price_night, img:string }[] = dishes

    const basePath = `/images/${details.file}/`


    


    return (
        <>
        <Overlay>
        {
            <div key={details.id} className={ 'dishModal' } >
                <div className='left-img'>
                    <Image alt='dish-img' 
                        src={`${basePath}${details.img}`} 
                        width={300} 
                        height={300} 
                        style={{
                        maxWidth: '100%',
                        width:'auto',  
                        height: 'auto',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        boxShadow: '2px 2px 2px 0px rgb(58, 56, 56)' 
                        }} 
                    />
                </div>
                <div className='right-text'>
                    <h2 className='right-text-title'>{details.name}</h2>
                    <p className='right-text-desc'>{details.description}</p>
                    <p>食材原產地 : 
                        <span className='right-text-from'>
                            {details.from}
                        </span>
                    </p>
                    <p>平日午餐 :
                        <span className='right-text-price_noon'>
                            NTD$ {details.price_noon}
                        </span>
                    </p>
                    <p>平日&假日晚餐 : 
                        <span className='right-text-price_night'>
                            NTD$ {details.price_night}
                        </span>
                    </p>
                </div>
                <button onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
        }
        </Overlay>
        </>
    );
}
 
export default DisplayModal;