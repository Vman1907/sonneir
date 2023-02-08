import { Link } from 'react-router-dom'

import '../styles/Nav.css'
import logo from '../assets/logo.svg'
import navBtn from '../assets/nav-menu.svg'
import { useEffect } from 'react'

const Nav = ({ page }) => {

    useEffect(() => {
        console.log(page)
    })

    return (
        <>
            <nav class="navbar navbar-expand-lg justify-content-between">
                <Link to='/' class="navbar-brand brand-start">
                    <img src={logo} alt='' />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <img src={navBtn} alt='' />
                    </span>
                </button>
                <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul class="navbar-nav justify-content-between">
                        <li class="nav-item">
                            <Link to='/get-in-touch' class={page === 'touch' ? "nav-link active" : "nav-link"}>Get in touch </Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/product' class={page === 'product' ? "nav-link active" : "nav-link"}>Product</Link>
                            {/* <a href='#' class={page === 'product' ? "nav-link active" : "nav-link"}>Product</a> */}
                        </li>
                    </ul>
                    <Link to='/' class="navbar-brand brand-end">
                        <img src={logo} alt='' />
                    </Link>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href='#' class={page === 'about' ? "nav-link active" : "nav-link"} >About us</a>
                            {/* <Link to='/about-us' class={page === 'about' ? "nav-link active" : "nav-link"} >About us</Link> */}
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href='https://www.knocksense.com/lucknow/sister-duo-from-lucknow-creates-sonneir-a-sustainable-luxury-label' class={page === 'blog' ? "nav-link active" : "nav-link"} >Blog</a>
                            {/* <Link to='/blog' class={page === 'blog' ? "nav-link active" : "nav-link"} >Blog</Link> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav