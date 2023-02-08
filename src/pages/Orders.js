import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/FloralRomance.css'

const Orders = () => {

    const [pages, setPages] = useState(false)

    return (
        <div className='fr-wrapper'>
            <span>Orders</span>
            <div className='row'>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/orders/inesh-bandgala'><span className='bg-pic-4'></span></Link>
                    <span>INESH BANDGALA SET</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/orders/pratichi-lehenga'><span className='bg-pic-5'></span></Link>
                    <span>PRATICHI LEHNGA SET</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/orders/jaide-lehenga'><span className='bg-pic-6'></span></Link>
                    <span>JAIDE LEHNGA SET</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/orders/utsa-saree'><span className='bg-pic-7'></span></Link>
                    <span>UTSA SAREE SET</span>
                </div>
            </div>
        </div>
    )
}

export default Orders