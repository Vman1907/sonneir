import { useEffect } from "react"
import { Link } from "react-router-dom"
import FloatingBtn from "../components/FloatingBtn"

import '../styles/Products.css'

const Products = ({ setPage }) => {

    useEffect(() => {
        setPage('product')
        document.getElementById("navbarNav").classList.remove("show")
    })

    return (
        <div className="product-wrapper">
            <FloatingBtn />
            <Link to='/product/cloud-candy'>

                <div className="bg-pic3">
                    <span>Cloud candy</span>
                </div>
            </Link>
            <Link to='/product/irresolute-drift'>

                <div className="bg-pic2">
                    <span>Irresolute drift</span>
                </div>
            </Link>
            <Link to='/product/floral-romance'>
                <div className="bg-pic1">
                    <span>Floral romance</span>
                </div>
            </Link>
            <Link to='/product/orders'>

                <div className="bg-pic4">
                    <span>Orders</span>
                </div>
            </Link>
            <Link to='/product/diwali-sets'>

                <div className="bg-pic4">
                    <span>Diwali Sets</span>
                </div>
            </Link>
            <Link to='/product/mini-wedding'>

                <div className="bg-pic4">
                    <span>Mini Wedding Edit</span>
                </div>
            </Link>

        </div>
    )
}

export default Products;