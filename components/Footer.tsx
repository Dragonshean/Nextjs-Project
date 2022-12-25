import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLine, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer () {
    return (
    <section className="footer">
        <h4>聯絡資訊</h4>
        <p>台北市中山區長安東路二段220號2F<br/>02-2731-5441</p>
        <div className="icons">
            <Link href="https://www.facebook.com/caesarsteak" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa fa-facebook" icon={ faFacebookF } />
            </Link>
            <Link href="https://lin.ee/XEgoAHz" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa-brands fa fa-line" icon={ faLine } />
            </Link>
            <Link href="https://goo.gl/maps/6nACEXLDpVRuer2K7" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa fa-google" icon={faGoogle} />
            </Link>
        </div>
        <p><FontAwesomeIcon className="fa-regular fa-copyright"
                    icon={ faCopyright } /> 2022 凱薩西餐牛排 Caesar Steaks. All rights reserved.</p>
        <p>Created by Wilson Shean.</p>
    </section>
    )
}
