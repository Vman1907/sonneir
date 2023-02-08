import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Irresolute.css'

const FloralRomance = () => {

    const [pages, setPages] = useState(false)

    return (
        <div className='fr-wrapper'>
            <span>Irresolute Drift</span>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/irresolute-drift/raya-dress'><span className='bg-pic-1'></span></Link>
                    <span>RAYA MULTILAYER DRESS</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/irresolute-drift/sheza-jumpsuit'><span className='bg-pic-2'></span></Link>
                    <span>SHEZA JUMPSUIT WITH SAIRA BUSTIER</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/irresolute-drift/saichi-jumpsuit'><span className='bg-pic-3'></span></Link>
                    <span>SAICHI JUMPSUIT</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/irresolute-drift/birgit-dress'><span className='bg-pic-4'></span></Link>
                    <span>BIRGIT DRESS WITH EISA JACKET</span>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <Link to='/product/irresolute-drift/anja-dress'><span className='bg-pic-5'></span></Link>
                    <span>ANJA DRESS WITH ASTA JACKET</span>
                </div>
                {/* <div className='col-lg-4 col-md-5'>
                    <Link to='/product/irresolute/'><span className='bg-pic-6'></span></Link>
                    <span>JAIDE LEHNGA SET</span>
                </div> */}
            </div>
        </div>
    )
}

export default FloralRomance