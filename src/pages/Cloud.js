import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Cloud.css'

const FloralRomance = () => {

    const [pages, setPages] = useState(false)

    return (
        <div className='fr-wrapper'>
            <span>Cloud Candy</span>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/ihita-set'><span className='bg-pic-1'></span></Link>
                    <span>IHITA ANARKALI SET</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/karvy-bustier'><span className='bg-pic-2'></span></Link>
                    <span>KARVY BUSTIER WITH KIMAYA SKIRT</span>
                </div>
                {/* <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/kimaya-skirt'><span className='bg-pic-3'></span></Link>
                    <span>KIMAYA SKIRT</span>
                </div> */}
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/anala-blouse'><span className='bg-pic-4'></span></Link>
                    <span>ANALA BLOUSE WITH OPEL SAREE</span>
                </div>
                {/* <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/opel-saree'><span className='bg-pic-5'></span></Link>
                    <span>OPEL SAREE</span>
                </div> */}
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/vela-top'><span className='bg-pic-6'></span></Link>
                    <span>VELA MULTISIZE TOP </span>
                </div>
                {/* <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/dhuni-trousers'><span className='bg-pic-6'></span></Link>
                    <span>DHUNI STRAIGHT TROUSERS </span>
                </div> */}
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/aapti-top'><span className='bg-pic-8'></span></Link>
                    <span>AAPTI BELL SLEEVE TOP</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/saaj-sardi'><span className='bg-pic-9'></span></Link>
                    <span>SAAJ SADRI</span>
                </div>
            </div>
        </div>
    )
}

export default FloralRomance