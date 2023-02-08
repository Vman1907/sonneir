import whatsapp from '../assets/Vector.svg'
import insta from '../assets/Instagram1.svg'
import fb from '../assets/Facebook1.svg'
import gmail from '../assets/Gmail.svg'
import twt from '../assets/Twitter.svg'
import web from '../assets/Vector-web.svg'
import file from '../assets/Vector-file.svg'
import refresh from '../assets/refresh.svg'
import logo from '../assets/logo.svg'


import '../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="header">
                <span><img src={whatsapp} alt='' /></span>
                <span><a href='https://wa.me/7704895219?text=Send%20us%20a%20%27Hi!'>Connect with us on Whatsapp</a></span>
            </div>
            <img className='logo' src={logo} alt='' />
            <div className='footer-content'>
                <div className='content'>
                    <div className='social'>
                        <span>Social Handles</span>
                        <span><img src={gmail} alt='' /><a href='#'>Gmail</a></span>
                        <span><img src={insta} alt='' /><a href='https://instagram.com/sonneirindia?igshid=YmMyMTA2M2Y='>Instagram</a></span>
                        <span><img src={fb} alt='' /><a href='#'>Facebook</a></span>
                        <span><img src={twt} alt='' /><a href='#'>Twitter</a></span>
                    </div>
                    <div className='resources'>
                        <span>Resources</span>
                        <span><img src={web} alt='' />FAQ's</span>
                        <span><img src={file} alt='' />Privacy Policy</span>
                        <span><img src={refresh} alt=''></img>Returned exchange</span>
                    </div>
                    <div className='pages'>
                        <span>Pages</span>
                        <span><Link to='/'>Home</Link></span>
                        <span><a href='#'>About Us</a></span>
                        <span><Link to='/get-in-touch'>Get in touch</Link></span>
                        <span><Link to='/product'>Product</Link></span>
                    </div>
                </div>
            </div>
            <div className='copyright'>© 2022.sonneir.com</div>
        </div>
    )
}

export default Footer;