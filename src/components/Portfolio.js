import React, { useState } from 'react'
import port1 from './img/port13.png'
import react from './img/react.png'
import node from './img/node.svg'
import mongo from './img/mongo.svg'
import razo from './img/razo.png'
import boot from './img/boot.svg'
import mat from './img/mat.png'
import redux from './img/redux.png'
import expre from './img/express.png'
import s3 from './img/s3.png'
import lambda from './img/lambda.png'
import vite from './img/vite.png'
import next from './img/nextjs.svg'
import threejs from './img/3d.webp'
import savvy from './img/savvy.webp'
import { BsArrowDownCircleFill, BsArrowUpCircleFill, BsFillArrowUpRightCircleFill, BsGithub, BsEye } from "react-icons/bs";

function Portfolio() {
    const [num, setnum] = useState(10)
    const [activeFilter, setActiveFilter] = useState('all')

    const portdata = [
        {
            img: savvy,
            des: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart, secure payment processing with Razorpay, and a responsive admin dashboard for inventory control. Specialized in jewelry and fashion items.",
            title: "Savvy Sutra",
            url: "https://savvysutra.com",
            category: "E-commerce jewelry",
            featured: true,
            skills: [{ name: "NextJs", img: next }, { name: 'Material UI', img: mat }, { name: "NodeJs", img: node }, { name: "ExpressJS", img: expre }, { name: "MongoDB", img: mongo }, { name: "Aws lambda", img: lambda }, { name: "Redux", img: redux }, { name: 'Razorpay', img: razo }, { name: "aws s3", img: s3 }],
            button: "View Project",
            highlights: ["Full-stack E-commerce", "Payment Integration", "Admin Dashboard", "Real-time Updates"]
        },
        {
            img: port1,
            des: "A sophisticated restaurant management system with online food ordering, table reservations, real-time order tracking, and integrated payment processing. Features a dynamic menu system and customer review management.",
            title: "Foodooze",
            url: "https://github.com/Sanuu05/foodooze",
            category: "Food & Dining",
            featured: true,
            skills: [{ name: "ReactJs", img: react }, { name: 'Bootstrap', img: boot }, { name: "NodeJs", img: node }, { name: "ExpressJS", img: expre }, { name: "MongoDB", img: mongo }, { name: "Redux", img: redux }, { name: 'Razorpay', img: razo }],
            button: "View Project",
            github: "https://github.com/yourusername/foodooze",
            highlights: ["Food Ordering System", "Table Reservations", "Payment Processing", "Real-time Tracking"]
        },
        {
            img: threejs,
            des: "An innovative 3D shoe customization platform built with Three.js and React, allowing users to design personalized footwear with real-time 3D visualization, color customization, and interactive design tools.",
            title: "Shoe Customization",
            url: "https://visionary-boba-2bf892.netlify.app/",
            category: "3D/Interactive",
            featured: true,
            skills: [{ name: 'Vite', img: vite }, { name: "ReactJs", img: react }, { name: 'ThreeJs', img: threejs }, { name: 'Material-UI', img: mat }],
            button: "View Project",
            github: "https://github.com/Sanuu05/3D-Shoe-Customisation",
            highlights: ["3D Visualization", "Real-time Customization", "Interactive Design", "Modern UI/UX"]
        },
        // {
        //     img: port13,
        //     des: "A cross-platform React Native mobile application for food delivery featuring real-time order tracking, push notifications, user authentication, and secure payment processing with Stripe integration.",
        //     title: "Foodooze Mobile App",
        //     url: "https://expo.dev/@devohut/foodapp",
        //     category: "Mobile App",
        //     featured: true,
        //     skills: [{ name: "React Native", img: react }, { name: "NodeJs", img: node }, { name: "ExpressJS", img: expre }, { name: "MongoDB", img: mongo }, { name: "Redux", img: redux }, { name: 'Stripe', img: stripe }],
        //     button: "View App",
        //     github: "https://github.com/yourusername/foodooze-mobile",
        //     highlights: ["Cross-platform Mobile", "Push Notifications", "Real-time Tracking", "Stripe Integration"]
        // },
        // {
        //     img: port17,
        //     des: "A feature-rich social media mobile application built with React Native, offering real-time post sharing, user interactions, push notifications, and seamless content management with Firebase integration.",
        //     title: "Blogy Mobile App",
        //     url: "https://expo.dev/@devohut/app/",
        //     category: "Mobile App",
        //     featured: true,
        //     skills: [{ name: "React Native", img: react }, { name: "NodeJs", img: node }, { name: "ExpressJS", img: expre }, { name: "MongoDB", img: mongo }, { name: 'firebase', img: fire }, { name: "Redux", img: redux }],
        //     button: "Open App",
        //     github: "https://github.com/yourusername/blogy-mobile",
        //     highlights: ["Social Media App", "Real-time Posts", "User Interactions", "Firebase Integration"]
        // },
        // {
        //     img: port22,
        //     des: "An innovative 3D shoe customization platform built with Three.js and React, allowing users to design personalized footwear with real-time 3D visualization, color customization, and interactive design tools.",
        //     title: "Shoe Customization",
        //     url: "https://visionary-boba-2bf892.netlify.app/",
        //     category: "3D/Interactive",
        //     featured: true,
        //     skills: [{ name: 'Vite', img: vite }, { name: "ReactJs", img: react }, { name: 'ThreeJs', img: threejs }, { name: 'Material-UI', img: mat }],
        //     button: "Open Website",
        //     github: "https://github.com/yourusername/shoe-customization",
        //     highlights: ["3D Visualization", "Real-time Customization", "Interactive Design", "Modern UI/UX"]
        // },
        // {
        //     img: port14,
        //     des: "A real-time messaging mobile application featuring instant message delivery, push notifications, user authentication, and seamless communication with Socket.io integration for live chat functionality.",
        //     title: "Messager",
        //     url: "https://expo.dev/@devohut/messenger/",
        //     category: "Mobile App",
        //     featured: true,
        //     skills: [{ name: "React Native", img: react }, { name: "NodeJs", img: node }, { name: "ExpressJS", img: expre }, { name: "MongoDB", img: mongo }, { name: "Redux", img: redux }, { name: 'Firebase', img: fire }, { name: 'Socket.io', img: socket }],
        //     button: "Open App",
        //     github: "https://github.com/yourusername/messager",
        //     highlights: ["Real-time Messaging", "Push Notifications", "Live Chat", "Socket.io Integration"]
        // },
        // {
        //     img: port15,
        //     des: "A comprehensive car rental platform with advanced booking system, real-time availability checking, secure payment processing, and user management. Features include vehicle search, booking history, and admin dashboard.",
        //     title: "Cariva",
        //     url: "https://carbbook.netlify.app/",
        //     category: "Transportation",
        //     featured: true,
        //     skills: [{ name: "ReactJs", img: react }, { name: 'Bootstrap', img: boot }, { name: "NodeJs", img: node }, { name: "ExpressJS", img: expre }, { name: "MongoDB", img: mongo }, { name: "Redux", img: redux }, { name: 'Firebase', img: fire }, { name: 'Razorpay', img: razo }],
        //     button: "Open Website",
        //     github: "https://github.com/yourusername/cariva",
        //     highlights: ["Car Rental Platform", "Advanced Booking", "Real-time Availability", "Admin Dashboard"]
        // },
        // {
        //     img: port6,
        //     des: "A sophisticated web-based messaging platform with real-time chat capabilities, user authentication, message encryption, and file sharing. Built with modern web technologies for seamless communication experience.",
        //     title: "Messenger Web",
        //     url: "https://moonlit-kulfi-4d39d4.netlify.app",
        //     category: "Communication",
        //     featured: true,
        //     skills: [{ name: "ReactJs", img: react }, { name: "NodeJs", img: node }, { name: "ExpressJS", img: expre }, { name: "MongoDB", img: mongo }, { name: "Redux", img: redux }, { name: 'Bootstrap', img: boot }, { name: 'Firebase', img: fire }, { name: 'Pusher', img: pusher }],
        //     button: "Open Website",
        //     github: "https://github.com/yourusername/messenger-web",
        //     highlights: ["Real-time Chat", "Message Encryption", "File Sharing", "User Authentication"]
        // },
        // {
        //     img: port16,
        //     des: "An intelligent news aggregation platform powered by Alan AI, featuring voice-controlled navigation, personalized content recommendations, and real-time news updates from multiple sources with natural language processing.",
        //     title: "AI NEWS WEB APP",
        //     url: "https://taupe-lamington-8e2a4b.netlify.app/",
        //     category: "AI/News",
        //     featured: true,
        //     skills: [{ name: "ReactJs", img: react }, { name: 'Material-UI', img: mat }, { name: 'Alan Ai', img: alan }],
        //     button: "Open Website",
        //     github: "https://github.com/yourusername/ai-news-app",
        //     highlights: ["AI-Powered", "Voice Control", "Personalized Content", "Natural Language Processing"]
        // },
        // {
        //     img: port9,
        //     des: "A comprehensive technology blog platform with advanced content management system, user authentication, comment system, and responsive design. Features include article categorization, search functionality, and admin panel.",
        //     title: "TECHHUB",
        //     url: "https://happy-heisenberg-9c1cdd.netlify.app/",
        //     category: "Blog/Content",
        //     featured: true,
        //     skills: [{ name: "ReactJs", img: react }, { name: "NodeJs", img: node }, { name: "ExpressJS", img: expre }, { name: "MongoDB", img: mongo }, { name: "Redux", img: redux }],
        //     button: "Open Website",
        //     github: "https://github.com/yourusername/techhub",
        //     highlights: ["Content Management", "User Authentication", "Comment System", "Admin Panel"]
        // }
    ]

    const categories = ['all', ...new Set(portdata?.map(project => project.category))]

    const filteredProjects = activeFilter === 'all'
        ? portdata.slice(0, num)
        : portdata.filter(project => project.category === activeFilter).slice(0, num)

    const toggleProjects = () => {
        setnum(num === 10 ? portdata.length : 10)
    }

    return (
        <section id='portfolio' className='portfolio-section'>
            <div className='portfolio'>
                <div className='container portfolio-container'>
                    <div className='portfolio-header' data-aos="fade-up" data-aos-duration="1000">
                        <p className='portfolio-subtitle'>My Work</p>
                        <h2 className='portfolio-title'>Featured Projects</h2>
                        <p className='portfolio-description'>
                            A showcase of my best work across different domains, demonstrating full-stack development capabilities and innovative solutions
                        </p>
                    </div>

                    <div className='portfolio-filters' data-aos="fade-up" data-aos-duration="1000">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category === 'all' ? 'All Projects' : category}
                            </button>
                        ))}
                    </div>

                    <div className='portfolio-grid'>
                        {filteredProjects.map((project, index) => (
                            <div key={index} className='project-card' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
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

                    {portdata.length > 10 && (
                        <div className='portfolio-toggle' data-aos="fade-up" data-aos-duration="1000">
                            <button onClick={toggleProjects} className='toggle-btn'>
                                {num === 10 ? (
                                    <>
                                        <span>Show More Projects</span>
                                        <BsArrowDownCircleFill />
                                    </>
                                ) : (
                                    <>
                                        <span>Show Less</span>
                                        <BsArrowUpCircleFill />
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
