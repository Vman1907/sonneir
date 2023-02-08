import { useEffect } from "react"

import qr from '../assets/qr.png'
import curve from '../assets/curve.svg'
import insta from '../assets/Instagram1.svg'
import fb from '../assets/Facebook1.svg'
import gmail from '../assets/Gmail.svg'

import '../styles/GetInTouch.css'
import FloatingBtn from "../components/FloatingBtn"

const GetInTouch = ({ setPage }) => {

    useEffect(() => {
        setPage('touch')
        document.getElementById("navbarNav").classList.remove("show")

    })

    return (
        <div className="git-wrapper">
            <FloatingBtn />
            <span className="header">Connect with us</span>
            <div className="row">
                <div className="col-lg-9 row justify-content-around">
                    <div className="cl">
                        <div className="qr">
                            <img src={qr} alt='' />
                        </div>
                    </div>
                    <div className="cl">
                        <span>Whatsapp</span>
                        <span>Scan the QR code to connect with</span>
                        <span>us on whatsapp</span>
                        <span className="hr-line"></span>
                        <span>or</span>
                        <span>Click the button bellow to directly</span>
                        <span>message us</span>
                        <button className="btn"><a href='https://wa.me/7704895219?text=Send%20us%20a%20%27Hi!'>Drop us a "Hi!"</a></button>
                    </div>
                </div>
            </div>
            <img className="curve-line" src={curve} alt='' />
            <div className="content">
                <span>We’d love to hear</span>
                <span> more from you!</span>
                <div className="inner-content row">

                    <div className="col-lg-3 col-md-7 col-sm-12">
                        <span><img src={insta} alt='' />Instagram</span>
                        <span>@sonneirindia</span>
                    </div>
                    <div className="col-lg-3 col-md-7 col-sm-12">
                        <span><img src={fb} alt='' />Facebook</span>
                        <span>@sonnier</span>
                    </div>
                    <div className="col-lg-3 col-md-7 col-sm-12">
                        <span><img src={gmail} alt='' />Email</span>
                        <span>@sonnier</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch