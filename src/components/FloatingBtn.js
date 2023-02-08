import { useState } from 'react'
import '../styles/FloatingBtn.css'

const FloatingBtn = () => {

    const [click, setClick] = useState(false)

    return (
        <>
            <div class="floating-container">
                <div onClick={() => { setClick(!click) }} class="floating-button">
                    <div className={click ? "rotate" : 'rotate-back'}></div>
                </div>
                <div class="element-container">
                    <a href='https://wa.me/7704895219?text=Send%20us%20a%20%27Hi!'>

                        <span className={click ? "float-element tooltip-left animate1" : "float-element tooltip-left animate-out1"}>
                        </span>
                    </a>

                    <a href='#'>
                        <span className={click ? "float-element tooltip-left animate2" : "float-element tooltip-left animate-out2"}>

                        </span>
                    </a>
                    <a href='https://instagram.com/sonneirindia?igshid=YmMyMTA2M2Y='>
                        <span className={click ? "float-element tooltip-left animate3" : "float-element tooltip-left animate-out3"}>

                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FloatingBtn