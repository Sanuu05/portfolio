import React, { useState } from 'react'
import port1 from './img/port13.png'
import port2 from './img/port2.png'
import port3 from './img/port3.jpg'
import port4 from './img/port4.png'
import port5 from './img/port5.png'
import port6 from './img/port6.png'
import port7 from './img/port7.png'
import port8 from './img/port8.png'
import port9 from './img/port9.png'
import port10 from './img/port10.png'
import port11 from './img/port11.png'
import port12 from './img/post12.png'
import port13 from './img/port15a.png'
import port14 from './img/port18.png'
import port15 from './img/pro22.png'
import port16 from './img/port22.png'
import port17 from './img/port23.png'
import port18 from './img/port24.png'
import port19 from './img/port25.png'
import port20 from './img/port26.png'
import port21 from './img/port27.png'
import port22 from './img/port28.png'
import html from './img/html.png'
import css from './img/css.png'
import java from './img/java.png'
import figma from './img/figma.png'
import react from './img/react.png'
import threejs from './img/threejs.png'
import node from './img/node.svg'
import mongo from './img/mongo.svg'
import git from './img/git.png'
import fire from './img/fire.png'
import socket from './img/socket.png'
import razo from './img/razo.png'
import vite from './img/vite.png'
import pusher from './img/pusher.png'
import alan from './img/alan.png'
import boot from './img/boot.svg'
import stripe from './img/stripe.png'
import mat from './img/mat.png'
import sass from './img/sass.png'
import redux from './img/redux.png'
import expre from './img/express.png'
import mysql from './img/mysql.png'
import { BsArrowDownCircleFill,BsArrowUpCircleFill ,BsFillArrowUpRightCircleFill } from "react-icons/bs";
function Portfolio() {
    const [num,setnum] = useState(6)
    const [activeFilter, setActiveFilter] = useState('all')
    
    const portdata = [
        {
            img: port4,
            des: "Full-stack e-commerce platform with payment integration, user authentication, and admin dashboard",
            title: "TechMart",
            url: "https://techmartt.netlify.app",
            category: "E-commerce",
            featured: true,
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Firebase",img:fire},{name:"Redux",img:redux},{name:'Razorpay',img:razo} ],
            button:"View Project"
        },
        {
            img: port1,
            des: "Multi-cuisine restaurant website with online ordering, table booking, and payment processing",
            title: "Foodooze",
            url: "https://foodzooe.netlify.app/",
            category: "Food & Dining",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Redux",img:redux},{name:'Razorpay',img:razo}],
            button:"View Project"
        },
        {
            img: port13,
            des: "Cross-platform mobile app for food delivery with real-time tracking and payment integration",
            title: "Foodooze Mobile App",
            url: "https://expo.dev/@devohut/foodapp",
            category: "Mobile App",
            featured: true,
            skills:[{name:"React Native",img:react},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Redux",img:redux},{name:'Stripe',img:stripe}],
            button:"View App"
        },
        {
            img: port17,
            des: "(Social Media App)",
            title: "Blogy Mobile App",
            url: "https://expo.dev/@devohut/app/",
            skills:[{name:"React Native",img:react},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:'firebase',img:fire},{name:"Redux",img:redux}],
            button:"Open App"
        },
        {
            img: port22,
           
            des: " 3D customization tool",
            title: "Shoe Customization",
            url: "https://visionary-boba-2bf892.netlify.app/",
            skills:[{name:'Vite',img:vite},{name:"ReactJs",img:react},{name:'ThreeJs',img:threejs},{name:'Material-UI',img:mat}],
            button:"Open Website"
        },
        {
            img: port14,
            des: "Chatting Mobile App",
            title: "Messager",
            url: "https://expo.dev/@devohut/messenger/",
            skills:[{name:"React Native",img:react},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Redux",img:redux},{name:'Firebase',img:fire},{name:'Socket.io',img:socket}],
            button:"Open App"
        },
        {
            img: port15,
            des: "(Car Rental Web App)",
            title: "Cariva",
            url: "https://carbbook.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Redux",img:redux},{name:'Firebase',img:fire},{name:'Razorpay',img:razo}],
            button:"Open Website"
            
        },
        {
            img: port19,
            des: "(Clone)",
            title: "Youtube",
            url: "https://youtubecln.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Material-Ui',img:mat},{name:"Redux",img:redux}],
            button:"Open Website"
        },
     
        {
            img: port18,
            des: "(Social Media Website)",
            title: "Blogy Mobile Website",
            url: "https://twittexr.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot},{name:"Redux",img:redux},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:'firebase',img:fire}],
            button:"Open Website"
        },
       
      
        {
            img: port21,
            des: "EMI calculator for Car,House ,Insurance or any with down payment(if any) ",
            title: "EMI Calculator",
            url: "https://emicalcu.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Material-UI',img:mat}],
            button:"Open Website"
        },
        {
            img: port6,
            des: "Chatting Web App",
            title: "Messenger",
            url: "https://moonlit-kulfi-4d39d4.netlify.app",
            skills:[{name:"ReactJs",img:react},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Redux",img:redux},{name:'Bootstrap',img:boot},{name:'Firebase',img:fire},{name:'Pusher',img:pusher}],
            button:"Open Website"
        },
        {
            img: port16,
           
            des: " Artificial Intelligence News App",
            title: "AI NEWS WEB APP",
            url: "https://taupe-lamington-8e2a4b.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Material-UI',img:mat},{name:'Alan Ai',img:alan}],
            button:"Open Website"
        },
        {
            img: port9,
            des: "(Tech Blog Web App)",
            title: "TECHHUB",
            url: "https://happy-heisenberg-9c1cdd.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Redux",img:redux}],
            button:"Open Website"
        },
        {
            img: port8,
            des: "(Cake Shop)",
            title: "CakeWorld",
            url: "https://cakeworldn.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot}],
            button:"Open Website"
        },
       
    
        {
            img: port10,
            des: "(Movie Web App)",
            title: "MovieApp",
            url: "https://zen-mclean-d30e68.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot}],
            button:"Open Website"
        },
        
        {
            img: port3,
            des: "(Burger Resturant)",
            title: "Burgery",
            url: "https://gallant-volhard-b773fe.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot}],
            button:"Open Website"
        },
        {
            img: port20,
           
            des: " 3D customization tool",
            title: "Customized T-Shirt",
            url: "https://silver-donut-02b056.netlify.app/",
            skills:[{name:'Vite',img:vite},{name:"ReactJs",img:react},{name:'ThreeJs',img:threejs}],
            button:"Open Website"
        },
        {
            img: port2,
            des: "(A bed and breakfast (typically shortened to B&B or BnB))",
            title: "Nestled Inn",
            url: "https://fervent-hypatia-2c1f75.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot}],
            button:"Open Website"
        },
        {
            img: port11,
            des: "(Interior Design website)",
            title: "Interiorlia",
            url: "https://laughing-lichterman-271421.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot}],
            button:"Open Website"
        },
        
        {
            img: port7,
            des: "(Trek Planing website)",
            title: "TreckPlanner",
            url: "https://xenodochial-goodall-a32c1b.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot}],
            button:"Open Website"
        }
    ]
    
    // Filter functions
    const filteredProjects = portdata.filter(project => {
        if (activeFilter === 'all') return true
        if (activeFilter === 'web') return !project.title.toLowerCase().includes('mobile') && !project.title.toLowerCase().includes('app')
        if (activeFilter === 'mobile') return project.title.toLowerCase().includes('mobile') || project.title.toLowerCase().includes('app')
        if (activeFilter === 'featured') return project.featured
        return project.category?.toLowerCase().includes(activeFilter.toLowerCase())
    })
    
    const handleFilterChange = (filter) => {
        setActiveFilter(filter)
    }
    
    return (
        <section id='project'>
        <div className='portfolio'>
            <div className='container'>
                <div className='uptitle'>
                    <p data-aos="fade-up" data-aos-duration="1000">Portfolio</p>
                    <h2 data-aos="fade-up" data-aos-duration="1000">Featured Projects</h2>
                    <p className='portfolio-subtitle' data-aos="fade-up" data-aos-duration="1000">Showcasing my best work across web and mobile development</p>
                    <div data-aos="fade-up" data-aos-duration="1000"></div>
                </div>
                
                {/* Filter Buttons */}
                <div className='portfolio-filters' data-aos="fade-up" data-aos-duration="1000">
                    <button 
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('all')}
                    >
                        All Projects
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'featured' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('featured')}
                    >
                        Featured
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('web')}
                    >
                        Web Apps
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('mobile')}
                    >
                        Mobile Apps
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'e-commerce' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('e-commerce')}
                    >
                        E-commerce
                    </button>
                </div>
                <div className='row portfoliorow'>
                    {
                        filteredProjects?.slice(0,num).map((v, i) => {
                            return  <div key={i} className='col-md-6 col-xl-4 col-12 mt-4 px-md-3'>
                             <div className='portmaincard' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay={i * 100}> 
                                <div className='portcard'>
                                    <div className='project-image'>
                                        <img 
                                            src={v?.img} 
                                            className='img-fluid' 
                                            alt={v?.title}
                                            onError={(e) => {
                                                console.log('Image failed to load:', v?.img);
                                                e.target.style.display = 'none';
                                            }}
                                            onLoad={() => console.log('Image loaded successfully:', v?.title)}
                                        />
                                        <div className='project-overlay'>
                                            <span className='category-badge'>{v?.category}</span>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <h2>{v?.title}</h2>
                                        <p>{v.des}</p>
                                        <a href={v?.url} target="_blank" rel="noopener noreferrer">
                                            <button className='project-btn'>{v?.button} <BsFillArrowUpRightCircleFill/></button>
                                        </a>
                                    </div>
                                </div>
                                <div className='project-skills'>
                                    {v?.skills?.map((skill, index)=>{
                                        return <div key={index} className='skill-item'>
                                            <img src={skill?.img} className='skill-icon' alt={skill.name}/>
                                            <span className='skill-name'>{skill.name}</span>
                                        </div>
                                    })}
                                </div>
                            </div>
                            </div>
                        })
                    }
                    <div className='portfolio-controls'>
                        {
                            filteredProjects?.length > num ? (
                                <button className='load-more-btn' onClick={() => setnum(num + 6)}>
                                    <BsArrowDownCircleFill className='btn-icon' />
                                    Load More Projects
                                </button>
                            ) : null
                        }
                        {
                            num > 6 ? (
                                <button className='load-less-btn' onClick={() => setnum(num - 6)}>
                                    <BsArrowUpCircleFill className='btn-icon' />
                                    Show Less
                                </button>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Portfolio
