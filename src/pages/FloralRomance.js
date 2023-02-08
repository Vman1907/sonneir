import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/FloralRomance.css'

const FloralRomance = () => {

    const [pages, setPages] = useState(false)

    return (
        <div className='fr-wrapper'>
            <span>Floral Romance</span>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/floral-romance/avir-kurta'><span className='bg-pic-1'></span></Link>
                    <span>AVIR KURTA SET</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/floral-romance/gena-lehenga'><span className='bg-pic-2'></span></Link>
                    <span>GENA LEHENGA SET</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/floral-romance/alisa-saree'><span className='bg-pic-3'></span></Link>
                    <span>ALISA SAREE SET</span>
                </div>
            </div>
        </div>
    )
}

export default FloralRomance