import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLine, faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
    return (
    <section className="footer">
        <h4>聯絡資訊</h4>
        <p>台北市中山區長安東路二段220號2F<br/>02-2731-5441</p>
        <div className="icons">
            <Link href="https://www.facebook.com/caesarsteak" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa fa-facebook" 
                    title="https://www.facebook.com/caesarsteak" icon={ faFacebookF } />
            </Link>
            <Link href="https://lin.ee/XEgoAHz" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa-brands fa fa-line"
                    title="https://lin.ee/XEgoAHz" icon={ faLine } />
            </Link>
            <Link href="https://goo.gl/maps/6nACEXLDpVRuer2K7" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa fa-google"
                    title="https://goo.gl/maps/6nACEXLDpVRuer2K7"  icon={faGoogle} />
            </Link>
        </div>
        <p><i className="fa-regular fa-copyright"></i> 2022 凱薩西餐牛排 Caesar Steaks. All rights reserved.</p>
        <p>Created by Wilson Shean.</p>
    </section>
    )
}
