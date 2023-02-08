import { useEffect } from "react"

const About = ({ setPage }) => {

    useEffect(() => {
        setPage('about')
        document.getElementById("navbarNav").classList.remove("show")

    })

    return (
        <div>About</div>
    )
}

export default About