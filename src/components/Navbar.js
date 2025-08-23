import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import $ from 'jquery'
import logo from './img/kogo4.png'
// import logo1 from './../image/logo24.png'
// import { HashLink } from 'react-router-hash-link';


function Navbar() {
    const [change, setchange] = useState(false)
    const [menu, setmenu] = useState(false)
    useEffect(() => {
        $('.menu-btn').click(function () {
            
            if (menu === true) {
                $('.menu-btn').addClass('open')
                $('.right_nav').addClass('cmenu')

            } else {
                $('.menu-btn').removeClass('open')
                $('.right_nav').removeClass('cmenu')

            }

        })



        $('.mbtn').click(function () {
            $('.right_nav').addClass('cmenu')
            $('.mbtn').addClass('mbtn2')
        })
        $('.xbtm').click(function () {
            $('.right_nav').removeClass('cmenu')
            $('.mbtn').addClass('mbtn2')
        })
        $('ul li').click(function () {
            $('.right_nav').removeClass('cmenu')
            $('.menu-btn').removeClass('open')

        })
        const sections = document.querySelectorAll('section')
        const navli = document.querySelectorAll('nav ul li')
        
        // iOS Safari scroll event handling
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isAndroid = /Android/.test(navigator.userAgent);
        const isMobile = isIOS || isAndroid;
        const scrollOptions = isMobile ? { passive: false } : { passive: true };
        
        const handleScroll = () => {
            let current = "";
            sections.forEach(section => {
                const sectop = section.offsetTop;
                if (window.pageYOffset > sectop) {
                    current = section.getAttribute('id')
                }
            })

            navli.forEach(li => {
                li.classList.remove('active');
                if (li.classList.contains(current)) {
                    li.classList.add('active')
                }
            })
        }
        
        window.addEventListener('scroll', handleScroll, scrollOptions)
        
        // Mobile device specific: comprehensive fix for navigation visibility
        let scrollTimeout;
        const ensureNavigationVisible = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const rightNav = document.querySelector('.right_nav');
                const nav = document.querySelector('.nav');
                
                if (rightNav && nav) {
                    // Force mobile browsers to recognize the elements
                    rightNav.style.visibility = 'hidden';
                    nav.style.visibility = 'hidden';
                    
                    // Force reflow by accessing offsetHeight
                    const rightNavHeight = rightNav.offsetHeight;
                    const navHeight = nav.offsetHeight;
                    
                    // Restore visibility
                    rightNav.style.visibility = 'visible';
                    nav.style.visibility = 'visible';
                    
                    // Ensure proper positioning
                    rightNav.style.position = 'relative';
                    const finalHeight = rightNav.offsetHeight; // Force another reflow
                    rightNav.style.position = '';
                }
            }, 50);
        };
        
        // More aggressive mobile handling
        if (isMobile) {
            // Listen to multiple events that can cause visibility issues
            window.addEventListener('scroll', ensureNavigationVisible, scrollOptions);
            window.addEventListener('resize', ensureNavigationVisible, scrollOptions);
            
            // iOS specific events
            if (isIOS) {
                window.addEventListener('orientationchange', ensureNavigationVisible, scrollOptions);
                document.addEventListener('visibilitychange', ensureNavigationVisible);
            }
            
            // Android specific events
            if (isAndroid) {
                window.addEventListener('focus', ensureNavigationVisible);
                window.addEventListener('blur', ensureNavigationVisible);
            }
            
            // Force visibility check every 2 seconds as a fallback
            const visibilityInterval = setInterval(ensureNavigationVisible, 2000);
            
            // Cleanup interval on unmount
            return () => {
                clearInterval(visibilityInterval);
                clearTimeout(scrollTimeout);
            };
        }
        
        const changenav = () => {
            if (window.scrollY > 100) {
                setchange(true)

            }
            else {
                setchange(false)
            }
        }
        window.addEventListener('scroll', changenav, scrollOptions)

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', changenav);
            if (isMobile) {
                window.removeEventListener('scroll', ensureNavigationVisible);
                window.removeEventListener('resize', ensureNavigationVisible);
                if (isIOS) {
                    window.removeEventListener('orientationchange', ensureNavigationVisible);
                    document.removeEventListener('visibilitychange', ensureNavigationVisible);
                }
                if (isAndroid) {
                    window.removeEventListener('focus', ensureNavigationVisible);
                    window.removeEventListener('blur', ensureNavigationVisible);
                }
            }
        }
    }, [menu])

    // $(document).on('click', 'ul li', function () {
    //     $(this).addClass("active").siblings().removeClass('active')
    // })










    return (
        <nav>
            <div className={change ? "nav shadow navbar fixed-top act" : "nav  navbar fixed-top"}>
                <div className="navbarr">

                    <div className="left_nav">
                        <a href="/#">
                            <img src={logo} alt='SS' className='logo navitem' />
                        </a>
                    </div>



                    <div className="right_nav">

                        <div className="snav">
                            <ul>
                                <li className="homee active navitem"><a href="/#">Home</a></li>
                                <li className="services navitem"><a href="/#service">Services</a></li>
                                <li className="aboutt navitem"><a href="/#about">About</a></li>
                                <li className="skill navitem"><a href="/#Skill">Skills</a></li>
                                <li className="port navitem"><a href="/#project">Projects</a></li>
                                <li className="cont navitem"><a href="/#contactme">Contact</a></li>

                            </ul>
                        </div>
                        <div className="menu-btn" onClick={() => setmenu(!menu)}>
                            <div className={change?"menu-btn__burgerone":"menu-btn__burger"} ></div>
                        </div>

                    </div>
                </div>

            </div>

        </nav>

    )
}


export default Navbar
