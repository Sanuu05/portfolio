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
import html from '../components/img/html.png'
import css from '../components/img/css.png'
import java from '../components/img/java.png'
import figma from '../components/img/figma.png'
import react from '../components/img/react.png'
import threejs from '../components/img/threejs.png'
import node from '../components/img/node.svg'
import mongo from '../components/img/mongo.svg'
import git from '../components/img/git.png'
import fire from '../components/img/fire.png'
import socket from '../components/img/socket.png'
import razo from '../components/img/razo.png'
import vite from '../components/img/vite.png'
import pusher from '../components/img/pusher.png'
import alan from '../components/img/alan.png'
import boot from '../components/img/boot.svg'
import stripe from '../components/img/stripe.png'
import mat from '../components/img/mat.png'
import sass from '../components/img/sass.png'
import redux from '../components/img/redux.png'
import expre from '../components/img/express.png'
import mysql from '../components/img/mysql.png'
import { BsArrowDownCircleFill,BsArrowUpCircleFill ,BsFillArrowUpRightCircleFill } from "react-icons/bs";
function Portfolio() {
    const [num,setnum] = useState(12)
    const portdata = [
        {
            img: port4,
            des: "(E-commerence website)",
            title: "TechMart",
            url: "https://techmartt.netlify.app",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Firebase",img:fire},{name:"Redux",img:redux},{name:'Razorpay',img:razo} ],
            button:"Open Website"
        },
        {
            img: port1,
            des: "(Multi-Cuisine Resturant)",
            title: "Foodooze",
            url: "https://foodzooe.netlify.app/",
            skills:[{name:"ReactJs",img:react},{name:'Bootstrap',img:boot},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Redux",img:redux},{name:'Razorpay',img:razo}],
            button:"Open Website"
        },
        {
            img: port13,
            des: "(Multi-Cuisine Resturant)",
            title: "Foodooze Mobile App",
            url: "https://expo.dev/@devohut/foodapp",
            skills:[{name:"React Native",img:react},{name:"NodeJs",img:node},{name:"ExpressJS",img:expre},{name:"MongoDB",img:mongo},{name:"Redux",img:redux},{name:'Stripe',img:stripe}],
            button:"Open App"
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
    return (
        <section id='portfolio'>
        <div className='portfolio'>
            <div className='container'>
                <div className='uptitle'>
                    <p data-aos="fade-up" data-aos-duration="1000">Portfolio</p>
                    <h2 data-aos="fade-up" data-aos-duration="1000">My Portfolio</h2>
                </div>
                <div className='row portfoliorow'>
                    {
                        portdata?.slice(0,num).map((v, i) => {
                            return  <div className='col-md-6 col-xl-4 col-12 mt-4 px-md-3'>
                             <div className='portmaincard' style={{backgroundColor:'#161c18'}} data-aos="zoom-in-up" data-aos-duration="1000"> 
                                <div className='portcard'>
                                    <img src={v?.img} className='img-fluid' alt='port'/>
                                    <div className='detail'>
                                        <h2 style={{textAlign:'center'}}>{v?.title}</h2>
                                        <p style={{textAlign:'center'}}>{v.des}</p>
                                        <a href={v?.url} target="_blank">
                                        <button className='mt-2'>{v?.button} <BsFillArrowUpRightCircleFill/></button>
                                        </a>
                                       
                                    </div>

                                </div>
                                <div className='d-flex justify-content-around flex-wrap mt-3'>
                                    {v?.skills?.map((v)=>{
                                        return <div className='px-2 d-flex flex-column justify-content-center align-items-center'>

                                         <img src={v?.img} className='img-fluid' style={{width:'35px',height:'35px'}} alt='port'/>
                                         <p style={{color:'white',fontSize:'12px',marginTop:'5px',textAlign:'center'}}>{v.name}</p>
                                         </div>
                                    })}

                                    </div>

                            </div>
                            </div>
                        })
                    }
                    <div className='portbtn'>
                        {
                            portdata?.length<=num?null:<BsArrowDownCircleFill className='mx-2' onClick={()=>setnum(num+6)}/>
                        }
                        {
                            num>6?<BsArrowUpCircleFill className='mx-2' onClick={()=>setnum(num-6)}/>:null
                        }
                    
                    

                    </div>





                </div>
            </div>

        </div>
        </section>
    )
}

export default Portfolio
