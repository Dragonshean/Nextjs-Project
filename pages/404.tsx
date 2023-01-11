import Image from 'next/image'
import Not404 from '../assets/img/404NotFound.png'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'





const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/'); //redirect the page to home page
        }, 2000)
    }, [router])




    return ( 
        <div>
            <Image src={Not404}
                    priority={true}
                    width={1215}
                    height={1010}
                    quality={100}
                    style={{objectFit: "cover"}} 
                    alt="404 Not Found"  
                    />
        </div>
     );
}
 
export default NotFound;