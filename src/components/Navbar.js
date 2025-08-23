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
        window.addEventListener('scroll', () => {
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



        })
        const changenav = () => {
            if (window.scrollY > 100) {
                setchange(true)

            }
            else {
                setchange(false)
            }
        }
        window.addEventListener('scroll', changenav)

    })

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
                        <div class="menu-btn" onClick={() => setmenu(!menu)}>
                            <div class={change?"menu-btn__burgerone":"menu-btn__burger"} ></div>
                        </div>

                    </div>
                </div>

            </div>

        </nav>

    )
}


export default Navbar