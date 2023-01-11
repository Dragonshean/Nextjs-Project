import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/img/Caesar_logo/CaesarLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLine, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer () {
    return (
    <section className="footer">
        <div className='left-box'>
            <p>XXXXX股份有限公司</p>
            <p>
                訂位專線 : (02)-2731-5441
            </p>
            <p>
                營業時間 : 週五，六，日
            </p>
            <p>台北市中山區長安東路二段220號2F</p>
        </div>
        <div className='middle-box'>
            <Image alt="Logo"
                priority={true}
                src={logo}
                width={120}
                height={120}
                style={{
                maxWidth: '100%',
                width: 'auto',
                height: 'auto',
                }} className="MainPageLogo"/>
            <p><FontAwesomeIcon className="fa-regular fa-copyright"
                    icon={ faCopyright } /> 2022 凱薩西餐牛排 Caesar Steaks. All rights reserved.</p>
            <p>Created by Wilson Shean.</p>
        </div>
        <div className='right-box'>
            <p></p>
            <div className="icons">
                <Link href="https://www.facebook.com/caesarsteak" className="fa fa-facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faFacebookF } />
                </Link>
                <Link href="https://lin.ee/XEgoAHz" className="fa-brands fa fa-line" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faLine } />
                </Link>
                <Link href="https://goo.gl/maps/6nACEXLDpVRuer2K7" className="fa fa-google" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faGoogle } />
                </Link>
            </div>
        </div>
    </section>
    )
}
