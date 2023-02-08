import { useEffect, useState } from "react";
import { useNavigate, useParams, redirect } from "react-router-dom";
import product_info from "../information/info";
import '../styles/ItemStyle.css'


const Product = () => {

    const { category, product } = useParams();

    const navigate = useNavigate()

    const [image, setImage] = useState()

    const [link, setLink] = useState("")

    useEffect(() => {
        setLink(`https://wa.me/917704895219?text=I%20have%20a%20query%20for%20this%20product.%0Ahttps%3A%2F%2Fsonneir.com%2Fproduct%2F${category}%2F${product}`)
    })

    useEffect(() => {
        if (product_info[category][product]) {
            setImage(product_info[category][product]["img"][0])
        }
    }, [])

    if (product_info[category][product] === undefined) {
        return (
            navigate("/home")
        );
    }
    else {
        return (
            <div className="item-wrapper">
                {product_info[category]["name"] ?
                    <>
                        <span>{product_info[category]["name"]}</span>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div>
                                    <img src={image} alt='' />
                                </div>
                                <div>
                                    {product_info[category][product]["img"].map((img, index) => {
                                        return (
                                            <img onClick={() => setImage(img)} src={img} alt='' />
                                        )
                                    })}

                                </div>
                            </div>
                            <div className="col-lg-5">
                                <span>{product_info[category][product]["name"]}</span>
                                <span>{product_info[category][product]["desc"]}</span>
                                <div className='inner-content'>
                                    <div className='content'>
                                        <span>Fabric</span>
                                        <span>{product_info[category][product]["fabric"]}</span>
                                        <span>Neckline</span>
                                        <span>{product_info[category][product]["neckline"]}</span>
                                        <span>Pockets</span>
                                        <span>{product_info[category][product]["pockets"]}</span>
                                        {product_info[category][product]["customization"]
                                            ?
                                            <>
                                                <span>Pockets</span>
                                                <span>{product_info[category][product]["customization"]}</span>
                                            </>
                                            :
                                            null
                                        }

                                    </div>
                                    <div className='content'>
                                        <span>Colour</span>
                                        <span>{product_info[category][product]["color"]}</span>
                                        <span>sleeves</span>
                                        <span>{product_info[category][product]["sleeves"]}</span>
                                        <span>pieces</span>
                                        <span>{product_info[category][product]["pieces"]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-9 '>
                                {category == 'cloud-candy' ?
                                    <div className='btn-container2'>
                                        {product_info[category][product]["items"].map((item, index) => {
                                            return (
                                                <div>
                                                    <span>{item} -</span>
                                                    <span>{product_info[category][product]["price"][index]}</span>
                                                </div>
                                            )
                                        })}

                                        <button className='btn btn-lg'><a href={link}>Buy Now</a></button>
                                    </div>
                                    :
                                    <div className='btn-container'>
                                        <span>
                                            {product_info[category][product]["price"]}
                                        </span>
                                        <button className='btn btn-lg'><a href='https://wa.me/917704895219?text=I%20have%20a%20query%20for%20this%20product.%0Ahttps%3A%2F%2Fsonneir.com%2Fproduct%2Firresolute-drift%2Fraya-dress'>Buy now</a></button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='aspect'>
                            <span>Design Aspect</span>
                            <span>{product_info[category][product]["design"]}</span>
                        </div>
                    </>
                    : navigate('/home')}
            </div>

        )
    }
}

export default Product;