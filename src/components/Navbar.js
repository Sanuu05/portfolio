import React, { useEffect, useState } from 'react'
import logo from './img/kogo4.png'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)

            // Active nav link on scroll
            const sections = document.querySelectorAll('section')
            const navItems = document.querySelectorAll('nav ul li')
            let current = ''
            sections.forEach(section => {
                if (window.pageYOffset > section.offsetTop - 100) {
                    current = section.getAttribute('id')
                }
            })
            navItems.forEach(li => {
                li.classList.remove('active')
                if (li.classList.contains(current)) {
                    li.classList.add('active')
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMenu = () => setMenuOpen(false)

    return (
        <nav>
            <div className={scrolled ? 'nav shadow navbar fixed-top act' : 'nav navbar fixed-top'}>
                <div className="navbarr">
                    <div className="left_nav">
                        <a href="/#" onClick={closeMenu}>
                            <img src={logo} alt='SS' className='logo navitem' />
                        </a>
                    </div>

                    <div className={`right_nav ${menuOpen ? 'cmenu' : ''}`}>
                        <div className="snav">
                            <ul>
                                <li className="homee active navitem"><a href="/#" onClick={closeMenu}>Home</a></li>
                                <li className="services navitem"><a href="/#service" onClick={closeMenu}>Services</a></li>
                                <li className="aboutt navitem"><a href="/#about" onClick={closeMenu}>About</a></li>
                                <li className="skill navitem"><a href="/#Skill" onClick={closeMenu}>Skills</a></li>
                                <li className="port navitem"><a href="/#project" onClick={closeMenu}>Projects</a></li>
                                <li className="cont navitem"><a href="/#contactme" onClick={closeMenu}>Contact</a></li>
                            </ul>
                        </div>

                        <div
                            className={`menu-btn ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(prev => !prev)}
                        >
                            <div className={scrolled ? 'menu-btn__burgerone' : 'menu-btn__burger'}></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar