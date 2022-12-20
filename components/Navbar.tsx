import logo from '../assets/img/Caesar_logo/CaesarLogo.png';
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'


export default function Navbar () {


    // let navLinks = document.getElementById('navLinks')
    // function showMenu() {
    //     navLinks.style.right = '0px'    
    // }
    // function hideMenu() {
    //     navLinks.style.right = '-200px'
    // }


    return ( 
        <section className="header">
            <div className="background" />
            <nav>
                <Link href="/">
                <Image alt="Logo"
                    src={logo}
                    width={120}
                    height={120}
                    style={{
                    maxWidth: '100%',
                    height: 'auto',
                    }} className="MainPageLogo"/>
                </Link>
                <div className="nav-links"  id="navLinks">
                    <button className="fa-solid fa-xmark" onClick={() =>console.log("hideMenu")}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <ul>
                        <li><Link href="/">首頁</Link></li>
                        <li><Link href="/Menu">本店菜單</Link></li>
                        <li><Link href="/OnlineSelling">網購商品</Link></li>
                        <li><Link href="/ContactPage">地址資訊</Link></li>
                    </ul>
                </div>
                <button className="fa-solid fa-bars" onClick={() => console.log("showMenu")}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </nav>
        </section>
     );
}
 
