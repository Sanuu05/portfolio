import React from 'react'
import BackgroundAnimation from './BackgroundAnimation'

function About() {
    return (
        <section id='about' className='about-section'>
            <div className='about'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 aboutleft'>
                            <BackgroundAnimation />
                        </div>
                        <div className='col-md-6 aboutright'>
                            <div className='about-content'>
                                <h2 
                                    className='about-title' 
                                    data-aos="fade-left" 
                                    data-aos-duration="1000"
                                >
                                    about me <span className='accent'>.</span>
                                </h2>
                                
                                <div className='about-text'>
                                    <p 
                                        className='lead-text'
                                        data-aos="fade-left" 
                                        data-aos-duration="1000" 
                                        data-aos-offset="300"
                                    >
                                        Hello there! I'm <strong>Shantanu Saha</strong>, a passionate Full-Stack Developer specializing in MERN Stack and React Native. With over 2 years of experience, I bridge the gap between web and mobile development, creating seamless digital experiences across all platforms.
                                    </p>
                                    
                                    <p 
                                        data-aos="fade-left" 
                                        data-aos-duration="1000"  
                                        data-aos-offset="300"
                                    >
                                        My expertise spans across <span className='highlight'>Frontend</span> (React.js, React Native, HTML5/CSS3, JavaScript, SASS, Bootstrap, Material UI), <span className='highlight'>Backend</span> (Node.js, Express.js), <span className='highlight'>Databases</span> (MongoDB, MySQL, Redis, Firebase), and <span className='highlight'>DevOps</span> (Git, Docker, AWS, Jira). I believe in writing clean, maintainable code that not only works flawlessly but also provides exceptional user experiences.
                                    </p>
                                    
                                    <p 
                                        data-aos="fade-left" 
                                        data-aos-duration="1000"  
                                        data-aos-offset="300"
                                    >
                                        I'm passionate about transforming complex ideas into elegant, user-friendly applications. Whether it's a responsive web app or a cross-platform mobile solution, I'm committed to delivering high-quality, scalable solutions that help businesses grow and succeed in the digital world.
                                    </p>
                                    
                                    <p 
                                        data-aos="fade-left" 
                                        data-aos-duration="1000"  
                                        data-aos-offset="300"
                                    >
                                        <strong>Currently seeking exciting opportunities</strong> - I'm primarily looking for <span className='highlight'>permanent positions</span> with innovative companies where I can grow and contribute long-term. I'm also open to discussing <span className='highlight'>select project opportunities</span> that align with my expertise and schedule.
                                    </p>
                                    
                                    <div 
                                        className='about-cta'
                                        data-aos="fade-up" 
                                        data-aos-duration="1000"  
                                        data-aos-offset="300"
                                    >
                                        <p className='cta-text'>
                                            Let's discuss how I can help bring your ideas to life! 🚀
                                        </p>
                                        <div className='resume-download'>
                                            <a 
                                                href="/Shantanu_Saha_Resume.pdf" 
                                                download="Shantanu_Saha_Resume.pdf"
                                                className='resume-btn'
                                                data-aos="fade-up" 
                                                data-aos-duration="1000"  
                                                data-aos-offset="400"
                                            >
                                                📄 Download Resume
                                            </a>
                                        </div>
                                    </div>
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
