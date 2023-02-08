import { useEffect } from "react"

const Blog = ({ setPage }) => {

    useEffect(() => {
        setPage('blog')
        document.getElementById("navbarNav").classList.remove("show")

    })

    return (
        <div>Blog</div>
    )
}

export default Blog