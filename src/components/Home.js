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

                            {/* Stats row */}
                            <div className="hero-stats leftitem">
                                <div className="hero-stat">
                                    <span className="hero-stat-num">3+</span>
                                    <span className="hero-stat-label">Years Exp.</span>
                                </div>
                                <div className="hero-stat-divider" />
                                <div className="hero-stat">
                                    <span className="hero-stat-num">10+</span>
                                    <span className="hero-stat-label">Projects</span>
                                </div>
                                <div className="hero-stat-divider" />
                                <div className="hero-stat">
                                    <span className="hero-stat-num">2</span>
                                    <span className="hero-stat-label">Companies</span>
                                </div>
                            </div>

                            {/* Social Links — horizontal row below stats */}
                            <div className="hero-socials leftitem">
                                <a href='https://api.whatsapp.com/send/?phone=917047416015&text&app_absent=0' target="_blank" rel="noopener noreferrer" className="hero-social-link hero-social-wa" aria-label="WhatsApp">
                                    <AiOutlineWhatsApp />
                                </a>
                                <a href='https://www.linkedin.com/in/shantanu-saha-5717b7148/' target="_blank" rel="noopener noreferrer" className="hero-social-link hero-social-li" aria-label="LinkedIn">
                                    <AiFillLinkedin />
                                </a>
                                <a href='https://github.com/Sanuu05' target="_blank" rel="noopener noreferrer" className="hero-social-link hero-social-gh" aria-label="GitHub">
                                    <AiFillGithub />
                                </a>
                                <a href='https://t.me/sanuu_mern' target="_blank" rel="noopener noreferrer" className="hero-social-link hero-social-tg" aria-label="Telegram">
                                    <SiTelegram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Right: VS Code Terminal Illustration ── */}
                    <div className="home-right">
                        <div className="hero-illustration leftitem">
                            <HeroAnimation />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home
