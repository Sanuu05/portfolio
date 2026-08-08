import React from 'react'
import { BsFillArrowUpRightCircleFill, BsGithub, BsEye } from "react-icons/bs";
import threejs from './img/3d.webp'
import threejsLogo from './img/threejs.png'
import savvy from './img/savvy.webp'
import vite from './img/vite.png'
import next from './img/nextjs.svg'
import mat from './img/mat.png'
import node from './img/node.svg'
import expre from './img/express.png'
import mongo from './img/mongo.svg'
import lambda from './img/lambda.png'
import redux from './img/redux.png'
import razo from './img/razo.png'
import s3 from './img/s3.png'
import reactImg from './img/react.png'

function Portfolio() {
    const portdata = [
        {
            img: savvy,
            des: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart, secure payment processing with Razorpay, and a responsive admin dashboard for inventory control. Specialized in jewelry and fashion items.",
            title: "Savvy Sutra",
            url: "https://savvysutra.com",
            category: "E-commerce jewelry",
            skills: [
                { name: "NextJs", img: next },
                { name: 'Material UI', img: mat },
                { name: "NodeJs", img: node },
                { name: "ExpressJS", img: expre },
                { name: "MongoDB", img: mongo },
                { name: "Aws lambda", img: lambda },
                { name: "Redux", img: redux },
                { name: 'Razorpay', img: razo },
                { name: "aws s3", img: s3 }
            ],
            button: "View Project",
            highlights: ["Full-stack E-commerce", "Payment Integration", "Admin Dashboard", "Real-time Updates"]
        },
        {
            img: threejs,
            des: "An innovative 3D shoe customization platform built with Three.js and React, allowing users to design personalized footwear with real-time 3D visualization, color customization, and interactive design tools.",
            title: "Shoe Customization",
            url: "https://shoecustomized.shantanusaha.in",
            category: "3D/Interactive",
            skills: [
                { name: 'Vite', img: vite },
                { name: "ReactJs", img: reactImg },
                { name: 'ThreeJs', img: threejsLogo },
                { name: 'Material-UI', img: mat }
            ],
            button: "View Project",
            github: "https://github.com/Sanuu05/3D-Shoe-Customisation",
            highlights: ["3D Visualization", "Real-time Customization", "Interactive Design", "Modern UI/UX"]
        },
        // ── Commented out (preserved for future use) ──
        // { title: "Foodooze",          category: "Food & Dining"    },
        // { title: "Foodooze Mobile",   category: "Mobile App"       },
        // { title: "Messager",          category: "Mobile App"       },
        // { title: "Cariva",            category: "Transportation"   },
        // { title: "Messenger Web",     category: "Communication"    },
        // { title: "AI News Web App",   category: "AI/News"         },
    ]

    return (
        <section id='portfolio' className='portfolio-section'>
            <div className='portfolio'>
                <div className='container portfolio-container'>
                    <div className='portfolio-header' data-aos="fade-up" data-aos-duration="1000">
                        <p className='portfolio-subtitle'>My Work</p>
                        <h2 className='portfolio-title'>Featured Projects</h2>
                        <p className='portfolio-description'>
                            A showcase of my best work across different domains, demonstrating
                            full-stack development capabilities and innovative solutions.
                        </p>
                    </div>

                    <div className='portfolio-grid'>
                        {portdata.map((project, index) => (
                            <div
                                key={index}
                                className='project-card'
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay={index * 100}
                            >
                                <div className='project-image'>
                                    <img src={project.img} alt={project.title} />
                                    <div className='project-overlay'>
                                        <div className='project-actions'>
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className='action-btn view-btn'>
                                                <BsEye />
                                            </a>
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className='action-btn github-btn'>
                                                    <BsGithub />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='project-content'>
                                    <div className='project-category'>{project.category}</div>
                                    <h3 className='project-title'>{project.title}</h3>
                                    <p className='project-description'>{project.des}</p>

                                    <div className='project-highlights'>
                                        {project.highlights.map((highlight, idx) => (
                                            <span key={idx} className='highlight-tag'>{highlight}</span>
                                        ))}
                                    </div>

                                    <div className='project-skills'>
                                        {project.skills.map((skill, idx) => (
                                            <div key={idx} className='skill-tag'>
                                                <img src={skill.img} alt={skill.name} />
                                                <span>{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className='project-footer'>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className='project-link'>
                                            {project.button} <BsFillArrowUpRightCircleFill />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
