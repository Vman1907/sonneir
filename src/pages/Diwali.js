import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Diwali.css'

const Diwali = () => {

    const [pages, setPages] = useState(false)

    return (
        <div className='fr-wrapper'>
            <span>Diwali Sets</span>
            <div className='row justify-content-center'>
                {/* <div className='col-lg-4 col-md-5'>
                    <Link to='/product/cloud-candy/ihita-set'><span className='bg-pic-1'></span></Link>
                    <span>IRIE ANGRAKHA SET</span>
                </div> */}
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/diwali-sets/atreyi-set'><span className='bg-pic-1'></span></Link>
                    <span>ATREYI SET</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/diwali-sets/arni-kurti'><span className='bg-pic-2'></span></Link>
                    <span>ARNI KURTI</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/diwali-sets/vela-top'><span className='bg-pic-3'></span></Link>
                    <span>SHYLA KURTI </span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/diwali-sets/aapti-top'><span className='bg-pic-4'></span></Link>
                    <span>ANIKA KURTI</span>
                </div>
            </div>
        </div>
    )
}

export default Diwali