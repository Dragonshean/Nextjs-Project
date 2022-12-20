import Image from 'next/image'
import QrCode from '../assets/img/line_qrcode.png';





export default function Contact () {
    return (
        <section className="location">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5844926408035!2d121.54040221423874!3d25.04817124387886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdea7b7aae3%3A0xbb73863323e56409!2z5Yex6Jap6KW_6aSQ54mb5o6S!5e0!3m2!1szh-TW!2stw!4v1663641782651!5m2!1szh-TW!2stw"
            width="600" height="450" style={{border:0}} allowFullScreen={false} loading="lazy"
            referrerPolicy={"no-referrer-when-downgrade"}></iframe>

        <div className="row">
            <div className="contact-plate">
                <div>
                    <i className="fa fa-home"></i>
                    <span>
                        <h5>104台北市中山區長安東路二段220號</h5>
                        <p>Zhongshan Dist., Taipei, Taiwan</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <span>
                        <h5>02-2731-5441</h5>
                        <p>營業時間為五、六、日 三天 <br/> 如果有需要訂位，請來電語音留言預約</p>
                    </span>
                </div>
            </div>
            <div className="sub-right">
                <div>
                    <i className="fa fa-brands fa-line"></i>
                    <span>
                        <h5>加入官方line訂位</h5>
                        <a href="https://lin.ee/XEgoAHz" title="加入官方line"><p>https://lin.ee/XEgoAHz</p></a>
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