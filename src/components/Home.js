import React, { useEffect } from 'react'
import { gsap } from "gsap";
import BackgroundAnimation from './BackgroundAnimation';
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
                    {/* Mobile Background Animation - Always Visible */}
                    <div className="mobile-bg-animation">
                        <BackgroundAnimation id="mobile-svgr" />
                    </div>
                    
                    <div className="home-left">
                        <div className="home-text-content">
                            <div className="greeting-line" id="smline"></div>
                            
                            <h4 className="greeting-text leftitem">Hello, I'm 👋</h4>
                            <h1 className="hero-name leftitem">Shantanu Saha</h1>
                            
                            <h2 className="hero-title leftitem">
                                A passionate <span className="accent-text">Full-Stack Developer</span> specializing in{' '}
                                <span className="accent-text">MERN Stack</span> and{' '}
                                <span className="accent-text">React Native</span> from{' '}
                                <span className="accent-text">India.</span>
                            </h2>
                            
                            <p className="hero-description leftitem">
                                I transform ideas into powerful, scalable web and mobile applications with modern technologies and clean code.
                            </p>
                            
                            <a href='/#contactme' className='cta-button leftitem'>
                                Let's Build Something Amazing
                            </a>
                        </div>
                    </div>
                    
                    <div className="home-right">
                        <div className="animation-container">
                            <BackgroundAnimation id="svgr" />
                        </div>
                        
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
