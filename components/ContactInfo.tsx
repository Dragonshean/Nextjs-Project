import Image from 'next/image'
import QrCode from '../assets/img/line_qrcode.png';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLine } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons'

export default function ContactInfo () {
    return (
        <section className="contact">
        <div className="row">
            <div className="contact-plate">
                <div>
                    <FontAwesomeIcon className="fa fa-home"
                        icon={ faHome } />
                    <span>
                        <h5>104台北市中山區長安東路二段220號</h5>
                        <p>Zhongshan Dist., Taipei, Taiwan</p>
                    </span>
                </div>
                <div>
                    <FontAwesomeIcon className="fa fa-phone"
                        icon={ faPhone } />
                    <span>
                        <h5>02-2731-5441</h5>
                        <p>營業時間為五、六、日 三天 <br/> 如果有需要訂位，請來電語音留言預約</p>
                    </span>
                </div>
            </div>
            <div className="sub-right">
                <div>
                <FontAwesomeIcon className="fa-brands fa fa-line" 
                    title="https://lin.ee/XEgoAHz" icon={ faLine } />
                    <span>
                        <h5>加入官方line訂位</h5>
                        <Link href="https://lin.ee/XEgoAHz" title="加入官方line"><p>https://lin.ee/XEgoAHz</p></Link>
                        <Image src={QrCode}width={1000}
                            height={1000}
                            style={{
                            maxWidth: '100%',
                            height: 'auto',
                            }} className="qrcode"  alt='qrcode'/>
                    </span>
                </div>
            </div>
        </div>
    </section>
    )
}