import React from 'react'
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
                            Who I Am
                        </h2>
                    </div>

                    {/* ── Section 1: Intro ── */}
                    <div className='row align-items-center mb-5'>
                        <div className='col-md-6 order-md-1 order-2' data-aos="fade-right" data-aos-duration="1000">
                            <div className='about-animation-container mb-4 mb-md-0'>
                                <TechAnimation1 />
                            </div>
                        </div>

                        <div className='col-md-6 order-md-2 order-1' data-aos="fade-left" data-aos-duration="1000">
                            <div className='about-content'>
                                <p className='lead-text'>
                                    Hi, I'm <strong>Shantanu Saha</strong> — a Full-Stack &amp; React Native Developer with <span className='highlight'>3+ years of corporate experience</span> building scalable web and mobile applications. I currently work as a <span className='highlight'>Software Engineer at Trellisys.Net</span>, where I own end-to-end delivery of new modules and ship core features for the <span className='highlight'>Vantara Zoo Management Platform</span> — a large-scale enterprise system for Reliance Vantara's 3,000-acre animal rescue center in Jamnagar, Gujarat.
                                </p>

                                <p>
                                    The <strong>Antz Systems</strong> mobile app I'm currently building manages animal health records, rescue operations, facility scheduling, and wildlife care protocols across iOS &amp; Android — serving real field teams at scale. Earlier, I was part of the same Vantara ecosystem at <span className='highlight'>Desun Technology</span> as a React Native Developer.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Section 2: Projects & Scale ── */}
                    <div className='row align-items-center mb-5'>
                        <div className='col-md-6 order-1' data-aos="fade-right" data-aos-duration="1000">
                            <div className='about-content'>
                                <p>
                                    Vantara has given me deep experience with <span className='highlight'>enterprise-scale React Native applications</span> — complex data relationships, real-time sync, role-based access control, offline-first architecture, and multi-platform deployment across iOS &amp; Android. I've shipped features like animal health tracking, breeding program management, rescue coordination, and facility maintenance scheduling.
                                </p>

                                <p>
                                    Alongside my corporate work, I've independently delivered <span className='highlight'>10+ freelance projects</span> — including e-commerce platforms, food delivery apps, real-time chat systems, car rental tools, AI-powered news apps, and an interactive 3D product customizer.
                                </p>
                            </div>
                        </div>

                        <div className='col-md-6 order-2' data-aos="fade-left" data-aos-duration="1000">
                            <div className='about-animation-container mt-4 mt-md-0'>
                                <TechAnimation2 />
                            </div>
                        </div>
                    </div>

                    {/* ── Section 3: Tech & Goals ── */}
                    <div className='row align-items-center'>
                        <div className='col-md-6 order-md-1 order-2' data-aos="fade-right" data-aos-duration="1000">
                            <div className='about-animation-container mb-4 mb-md-0'>
                                <TechAnimation3 />
                            </div>
                        </div>

                        <div className='col-md-6 order-md-2 order-1' data-aos="fade-left" data-aos-duration="1000">
                            <div className='about-content'>
                                <p>
                                    My tech stack spans <span className='highlight'>Frontend</span> (React.js, React Native, Next.js, TypeScript, Redux Toolkit), <span className='highlight'>Backend</span> (Node.js, Express.js, REST APIs), <span className='highlight'>Databases</span> (MongoDB, PostgreSQL, MySQL, Redis, Firebase), and <span className='highlight'>DevOps</span> (AWS EC2/S3/Lambda, Docker, Git). I consistently focus on performance — I've driven a <strong>40% reduction in load times</strong> on key projects.
                                </p>

                                <p>
                                    I'm actively seeking <span className='highlight'>challenging opportunities</span> where I can contribute full-stack expertise, lead technical decisions, and grow as a technology leader.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── CTA ── */}
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <div
                                className='about-cta'
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                {/* Stats Row */}
                                <div className='about-stats'>
                                    <div className='stat-item'>
                                        <span className='stat-number'>3+</span>
                                        <span className='stat-label'>Years Experience</span>
                                    </div>
                                    <div className='stat-divider'></div>
                                    <div className='stat-item'>
                                        <span className='stat-number'>10+</span>
                                        <span className='stat-label'>Projects Delivered</span>
                                    </div>
                                    <div className='stat-divider'></div>
                                    <div className='stat-item'>
                                        <span className='stat-number'>20+</span>
                                        <span className='stat-label'>Technologies</span>
                                    </div>
                                </div>

                                <p className='cta-text'>
                                    Interested in working together? Download my resume or let's have a conversation. 🚀
                                </p>

                                <div className='resume-download'>
                                    <a
                                        href="/Shantanu_Saha_Resume.pdf"
                                        download="Shantanu_Saha_Resume.pdf"
                                        className='resume-btn'
                                        id="resume-download-btn"
                                    >
                                        📄 Download Resume
                                    </a>
                                    <a
                                        href="/#contactme"
                                        className='resume-btn-secondary'
                                    >
                                        Let's Talk
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
