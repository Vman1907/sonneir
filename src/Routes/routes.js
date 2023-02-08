import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import React, { Suspense, useState } from 'react'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
const Home = React.lazy(() => import('../pages/Home'))
const Nav = React.lazy(() => import('../pages/Nav'))
const Products = React.lazy(() => import('../pages/Products'))
const Blog = React.lazy(() => import('../pages/Blog'))
const About = React.lazy(() => import('../pages/About'))
const GetInTouch = React.lazy(() => import('../pages/GetInTouch'))
const LoginPage = React.lazy(() => import('../pages/LoginPage'))
const FloralRomance = React.lazy(() => import('../pages/FloralRomance'))
const Orders = React.lazy(() => import('../pages/Orders'))
const Irresolute = React.lazy(() => import('../pages/Irresolute'))
const Cloud = React.lazy(() => import('../pages/Cloud'))
const Product = React.lazy(() => import('../pages/Product'))
const Diwali = React.lazy(() => import('../pages/Diwali'))
const Wedding = React.lazy(() => import('../pages/Wedding'))


const Router = () => {

    const [page, setPage] = useState('home')

    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Nav page={page} />
                <Routes>
                    <Route path='*' element={<Navigate to="/home" replace={true} />} />
                    <Route exact path='/' element={<Home setPage={setPage} />} />
                    <Route path='/home' element={<Home setPage={setPage} />} />
                    <Route path='/product' element={<Products setPage={setPage} />} />
                    <Route path='/about-us' element={<About setPage={setPage} />} />
                    <Route path='/blog' element={<Blog setPage={setPage} />} />
                    <Route path='/get-in-touch' element={<GetInTouch setPage={setPage} />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='/product/floral-romance' element={<FloralRomance />} />
                    <Route path='/product/irresolute-drift' element={<Irresolute />} />
                    <Route path='/product/orders' element={<Orders />} />
                    <Route path='/product/cloud-candy' element={<Cloud />} />
                    <Route path='/product/diwali-sets' element={<Diwali />} />
                    <Route path='/product/mini-wedding' element={<Wedding />} />
                    <Route path='/product/:category/:product' element={<Product />} />
                </Routes>
                <Footer />
            </Suspense>
        </BrowserRouter>
    )

}

export default Router;