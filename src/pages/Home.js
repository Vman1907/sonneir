import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from '3d-react-carousal';

import FloatingBtn from '../components/FloatingBtn'

// import { Carousel } from 'react-responsive-carousel'
import pic1 from '../assets/carousel1.png'
import pic2 from '../assets/carousel2.png'
import pic3 from '../assets/carousel3.png'
import pic4 from '../assets/carousel4.png'
import rect2 from '../assets/Rectangle-2.png'
import rect1 from '../assets/Rectangle-1.png'
import rect3 from '../assets/Rectangle-3.png'
import rect4 from '../assets/Rectangle-4.png'
import rect5 from '../assets/Rectangle-5.png'
import rect6 from '../assets/Rectangle-6.png'
import rect7 from '../assets/Rectangle-7.png'
import rect8 from '../assets/Rectangle-8.png'
import rect9 from '../assets/Rectangle-9.png'
import rect10 from '../assets/Rectangle-10.png'
import rect12 from '../assets/Rectangle 12.png'
import rect14 from '../assets/Rectangle 14.png'
import rect24 from '../assets/Rectangle 24.png'
import rect20 from '../assets/Rectangle 20.png'
import rect22 from '../assets/Rectangle 22.png'
import line from '../assets/Vector 5.svg'
import line2 from '../assets/Vector 6.svg'

import '../styles/Home.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ setPage }) => {

    let slides = [
        <img src={pic1} alt="1" />,
        <img src={pic2} alt="2" />,
        <img src={pic3} alt="3" />,
        <img src={pic4} alt="4" />];

    useEffect(() => {
        setPage('home')
        window.scrollTo(0, 0)
        console.log(document.getElementById("navbarNav"))
        document.getElementById("navbarNav").classList.remove("show")
    })

    return (
        <div className="home-wrapper">
            <FloatingBtn />
            <div className="carousel-container">
                <Carousel slides={slides} autoplay={false} interval={1000} />
            </div>
            <div className="loop">
                <Link to='/product/orders/inesh-bandgala'>
                    <img src={rect3} alt='' />
                </Link>
                <Link to='/product/orders/pratichi-lehenga'>
                    <img src={rect4} alt='' />
                </Link>
                <Link to='/product/orders/jaide-lehenga'>
                    <img src={rect5} alt='' />
                </Link>
                <Link to='/product/irresolute-drift/sheza-jumpsuit'>
                    <img src={rect6} alt='' />
                </Link>
                <Link to='/product/floral-romance/avir-kurta'>
                    <img src={rect7} alt='' />
                </Link>
                <Link to='/product/floral-romance/gena-lehenga'>
                    <img src={rect8} alt='' />
                </Link>
                <Link to='/product/irresolute-drift/anja-dress'>
                    <img src={rect9} alt='' />
                </Link>
                <Link to='/product/irresolute-drift/saichi-jumpsuit'>
                    <img src={rect10} alt='' />
                </Link>
            </div>
            <div className="about-us">
                <div className="header">
                    <div className="hr-line"></div>
                    <div className="heading">About us</div>
                    <div className="hr-line"></div>
                </div>
                <div className="content">
                    <span>SONNEIR, founded in September 2021, was born with the thought of creating an effortless clothing</span>
                    <span>experience for distinguished clientele. We believe in creating pieces which leave the wearer feeling</span>
                    <span>empowered with the confidence of embracing mother nature.</span>
                </div>
            </div>
            <img src={line} alt='' />
            <div className="saree">
                <div className="content-1">
                    <div className="inner-image">
                        <img src={rect2} alt='' />
                    </div>
                    <div className="content-inner">
                        <span>Alisa Saree</span>
                        <span>ALISA SAREE SET handcrafted in custom dyed</span>
                        <span>EPFC certified Orange peel fabric stands true to its</span>
                        <span>name and is GRAND.</span>
                        <div className='btn-container'>
                            <span>
                                61,502/-
                            </span>
                            <button className='btn btn-lg'><a href='https://wa.me/917704895219?text=I%20have%20a%20query%20for%20this%20product.%0Ahttps%3A%2F%2Fsonneir.com%2Fproduct%2Ffloral-romance%2Fgena-lehenga'>Buy now</a></button>
                        </div>
                    </div>
                </div>
                <div className="content-2">
                    <img src={rect1} alt='' />
                </div>
            </div>
            <div className="banner">
                <span>Design Aspect</span>
                <span>With an elaborate fabric catalog featuring</span>
                <span>sustainable options like EPFC certified Orange peel</span>
                <span>fabric, GOTS certified cotton-hemp and 100%</span>
                <span>hemp, aloe vera fabric, lotus petal fabric etc</span>
                <span>the choices are endless. </span>
                <span>Know More</span>
            </div>
            <img className="curve-lines" src={line} alt='' />
            <div className="saree-2">
                <div className="content-1">
                    <div className="content-inner">
                        <span>Sheza Jumpsuit with Saira Bustier</span>
                        <span> All of our debut collection, Irresolute drift, has been about designing pieces which are loaded with comfort, functionality and style.</span>
                        <span>SHEZA JUMPSUIT in certified premium Orange peel Fabric lined with Tencel and SAIRA BUSTIER in certified Hemp fabric with 3-D embroidery inspired from Tubeworms settled in deep trenches of the se</span>
                        <span>
                            <div className='btn-container'>
                                <span>
                                    15,702/-
                                </span>
                                <button className='btn btn-lg'><a href="https://wa.me/917704895219?text=I%20have%20a%20query%20for%20this%20product.%20https%3A%2F%2Fsonneir.com%2Fproduct%2Firresolute-drift%2Fsheza-jumpsuit%0A%0A">Buy now</a></button>
                            </div>
                        </span>
                        {/* All of our debut collection, Irresolute drift, has been about designing pieces which are loaded with comfort, functionality and style.

                        SHEZA JUMPSUIT in certified premium Orange peel Fabric lined with Tencel and SAIRA BUSTIER in certified Hemp fabric with 3-D embroidery inspired from Tubeworms settled in deep trenches of the se */}
                    </div>
                    <div className="inner-image">
                        <img src={rect14} alt='' />
                    </div>
                </div>
                <div className="content-2">
                    <img src={rect12} alt='' />
                </div>
            </div>
            <div className="video-wrapper">
                <div>
                    <span>Video inspiration</span>
                    <span>An expression of our creativity</span>
                    <span>With an elaborate fabric catalog featuring sustainable options like EPFC certified Orange peel fabric,</span>
                    <span>GOTS certified cotton-hemp and 100% hemp, aloe vera fabric, lotus petal fabric etc the choices are endless. </span>
                </div>
                <iframe width="730" height="420" src="https://www.youtube.com/embed/YRACpA9CuOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img className="curve-2" src={line2} alt='' />
            <div className="saree-3">
                <div className="content-2">
                    <img src={rect20} alt='' />
                </div>
                <div className="content-1">
                    <div className="content-inner">
                        <span>Anja dress with asta jacket</span>
                        <span>ANJA DRESS with multi panel body in custom dyed</span>
                        <span>premium Hemp fabric lined with Tencel paired with</span>
                        <span>ASTA JACKET made in a mesh like structure with </span>
                        <span>hand embroidery designed to resemble ocean waves.</span>
                        <span>Anja dress (₹9999) with asta jacket </span>
                        <span>
                            <div className='btn-container'>
                                <span>
                                    15,340/-
                                </span>
                                <button className='btn btn-lg'><a href="https://wa.me/917704895219?text=I%20have%20a%20query%20for%20this%20product.%20https%3A%2F%2Fsonneir.com%2Fproduct%2Firresolute-drift%2Fanja-dress%0A%0A">Buy now</a></button>
                            </div>
                        </span>
                    </div>
                    <div>
                        <div className="inner-image">
                            <img src={rect22} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="info">
                <span>Sonneir functions primarily with capsule collections which are</span>
                <span>inspiration based and cater to sustainable luxury couture and functional</span>
                <span>prét segments</span>
            </div>
        </div>
    )
}

export default Home