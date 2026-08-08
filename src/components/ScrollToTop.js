import React, { useEffect, useState } from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'

function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            id="scroll-to-top-btn"
            className={`scroll-to-top ${visible ? 'visible' : ''}`}
            onClick={scrollTop}
            aria-label="Scroll to top"
        >
            <BsArrowUpCircleFill />
        </button>
    )
}

export default ScrollToTop
