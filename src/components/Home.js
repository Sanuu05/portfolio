import React, { useEffect } from 'react'
import { gsap } from "gsap";
import HeroAnimation from './HeroAnimation';
import { AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";

function Home() {
    useEffect(() => {
        var tl = gsap.timeline();

        tl.from('.navitem', {
            stagger: .3,
            duration: 1,
            y: 20,
            delay: 0,
            ease: 'Expo.easeInOut',
            opacity: 0
        })
        .from('#smline', {
            width: 0,
            delay:1.2,
            duration: 1,
            ease: 'Expo.easeInOut',
        }, '-=2')
        .from('.leftitem', {
            stagger: .3,
            delay:1.3,
            duration: 2,
            y: 20,
            ease: 'Expo.easeInOut',
            opacity: 0
        }, '-=2')
    }, [])

    return (
        <section id="homee" className="home-section">
            <div className="container">
                <div className="home-content">
                    {/* ── Left: Text ── */}
                    <div className="home-left">
                        <div className="home-text-content">
                            <div className="greeting-line" id="smline"></div>
                            
                            <h4 className="greeting-text leftitem">Hello, I'm 👋</h4>
                            <h1 className="hero-name leftitem">Shantanu Saha</h1>
                            
                            <h2 className="hero-title leftitem">
                                <span className="accent-text">Full-Stack &amp; React Native Developer</span> — MERN Stack,{' '}
                                <span className="accent-text">Next.js</span> &amp; <span className="accent-text">React Native</span> from{' '}
                                <span className="accent-text">India.</span>
                            </h2>
                            
                            <p className="hero-description leftitem">
                                3+ years building enterprise-grade web &amp; mobile apps. Currently a Software Engineer at <strong>Trellisys.Net</strong>.
                            </p>
                            
                            <div className="hero-cta-row leftitem" style={{ marginTop: '10px' }}>
                                <a href='/#contactme' className='cta-button' id="hero-cta-btn">
                                    <span className="cta-shimmer" />
                                    <span className="cta-text-full">Let's Build Something Amazing</span>
                                    <span className="cta-text-short">Let's Connect</span>
                                    <span className="cta-arrow">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* ── Right: WOW Animated Orbital Illustration ── */}
                    <div className="home-right">
                        <div className="hero-illustration leftitem">
                            <HeroAnimation />
                        </div>

                        {/* Social Links */}
                        <div className='social-links-desktop'>
                            <a href='https://api.whatsapp.com/send/?phone=917047416015&text&app_absent=0' target="_blank" rel="noopener noreferrer">
                                <AiOutlineWhatsApp className="social-icon leftitem" />
                            </a>
                            <a href='https://www.linkedin.com/in/shantanu-saha-5717b7148/' target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin className="social-icon leftitem" />
                            </a>
                            <a href='https://github.com/Sanuu05' target="_blank" rel="noopener noreferrer">
                                <AiFillGithub className='social-icon leftitem' />
                            </a>
                            <a href='https://t.me/sanuu_mern' target="_blank" rel="noopener noreferrer">
                                <SiTelegram className='social-icon leftitem' />
                            </a>
                        </div>
                    </div>
                    
                    {/* Mobile social links */}
                    <div className='social-links-mobile'>
                        <a href='https://api.whatsapp.com/send/?phone=917047416015&text&app_absent=0' target="_blank" rel="noopener noreferrer">
                            <AiOutlineWhatsApp className="social-icon leftitem" />
                        </a>
                        <a href='https://www.linkedin.com/in/shantanu-saha-5717b7148/' target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin className="social-icon leftitem" />
                        </a>
                        <a href='https://github.com/Sanuu05' target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className='social-icon leftitem' />
                        </a>
                        <a href='https://t.me/sanuu_mern' target="_blank" rel="noopener noreferrer">
                            <SiTelegram className='social-icon leftitem' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
