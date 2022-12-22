import Image from 'next/image'
import Not404 from '../assets/img/404NotFound.png'



const NotFound = () => {
    return ( 
        <div>
            <Image src={Not404}
                    width={1215}
                    height={1010}
                    style={{objectFit: "cover"}} 
                    alt="404 Not Found"  
                    />
        </div>
     );
}
 
export default NotFound;