import React from 'react'
import BackgroundAnimation from './BackgroundAnimation'
import BackgroundAnimation1 from './BackgroundAnimation1'
import BackgroundAnimation2 from './BackgroundAnimation2'
import BackgroundAnimation3 from './BackgroundAnimation3'
import TechAnimation1 from './TechAnimation1'
import TechAnimation2 from './TechAnimation2'
import TechAnimation3 from './TechAnimation3'

function About() {
    return (
        <section id='about' className='about-section'>
            <div className='about'>
                <div className='container about-container'>
                    <div className='about-header text-center mb-5'>
                        <h2 
                            className='about-title' 
                            data-aos="fade-up" 
                            data-aos-duration="1000"
                        >
                            about me <span className='accent'>.</span>
                        </h2>
                    </div>
                    
                    {/* First Section: Mobile-first responsive layout */}
                    <div className='row align-items-center mb-5'>
                        <div className='col-md-6 order-md-1 order-2' data-aos="fade-right" data-aos-duration="1000">
                            <div className='about-animation-container mb-4 mb-md-0'>
                                <TechAnimation1 />
                            </div>
                        </div>
                        
                        <div className='col-md-6 order-md-2 order-1' data-aos="fade-left" data-aos-duration="1000">
                            <div className='about-content'>
                                <p className='lead-text'>
                                    Hello there! I'm <strong>Shantanu Saha</strong>, a passionate Full-Stack Developer specializing in MERN Stack and React Native. With over 2 years of experience, I create seamless digital experiences across all platforms.
                                </p>
                                
                                <p>
                                    My primary focus has been on the <span className='highlight'>Vantara Zoo Management Platform</span> - a comprehensive SaaS solution I've been developing for <span className='highlight'>2+ years</span>. This platform manages 3,000+ animal records, rescue operations, facility management, and wildlife care protocols. It's built with React Native for mobile accessibility and MERN stack for robust backend operations.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Second Section: Mobile-optimized layout */}
                    <div className='row align-items-center mb-5'>
                        <div className='col-md-6 order-1' data-aos="fade-right" data-aos-duration="1000">
                            <div className='about-content'>
                                <p>
                                    The Vantara project showcases my ability to handle <span className='highlight'>enterprise-scale applications</span> with complex data relationships, real-time updates, and multi-user access controls. I've implemented features like animal health tracking, breeding programs, rescue coordination, and facility maintenance scheduling.
                                </p>
                                
                                <p>
                                    Beyond Vantara, I've delivered <span className='highlight'>10+ successful projects</span> including e-commerce platforms, food delivery apps, messaging systems, pharmacy management solutions, car rental platforms, AI-powered news applications, laundry booking systems, order tracking features, and 3D customization tools.
                                </p>
                            </div>
                        </div>
                        
                        <div className='col-md-6 order-2' data-aos="fade-left" data-aos-duration="1000">
                            <div className='about-animation-container mt-4 mt-md-0'>
                                <TechAnimation2 />
                            </div>
                        </div>
                    </div>
                    
                    {/* Third Section: Consistent mobile layout */}
                    <div className='row align-items-center'>
                        <div className='col-md-6 order-md-1 order-2' data-aos="fade-right" data-aos-duration="1000">
                            <div className='about-animation-container mb-4 mb-md-0'>
                                <TechAnimation3 />
                            </div>
                        </div>
                        
                        <div className='col-md-6 order-md-2 order-1' data-aos="fade-left" data-aos-duration="1000">
                            <div className='about-content'>
                                <p>
                                    My technical expertise spans <span className='highlight'>Frontend</span> (React.js, React Native, Next.js, TypeScript), <span className='highlight'>Backend</span> (Node.js, Express.js, Django), <span className='highlight'>Databases</span> (MongoDB, MySQL, Redis, Firebase), and <span className='highlight'>DevOps</span> (AWS, Docker, Git). I consistently deliver 40% performance improvements and maintain 99.9% uptime.
                                </p>
                                
                                <p>
                                    <strong>Currently seeking exciting opportunities</strong> - I'm looking for <span className='highlight'>permanent positions</span> with innovative companies where I can contribute long-term value and continue growing as a strategic technology partner.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row mt-4'>
                        <div className='col-12 text-center'>
                            <div 
                                className='about-cta'
                                data-aos="fade-up" 
                                data-aos-duration="1000"
                            >
                                <p className='cta-text'>
                                    Let's discuss how I can help bring your ideas to life! 🚀
                                </p>
                                <div className='resume-download'>
                                    <a 
                                        href="/Shantanu_Saha_Resume.pdf" 
                                        download="Shantanu_Saha_Resume.pdf"
                                        className='resume-btn'
                                    >
                                        📄 Download Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
