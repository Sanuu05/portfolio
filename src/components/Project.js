import React, { useState } from 'react'
import port4 from './img/pro1.png'

import port1 from './img/pro2.png'

import port13 from './img/pro3.png'

import port17 from './img/pro4.png'

import { BsArrowDownCircleFill,BsArrowUpCircleFill ,BsFillArrowUpRightCircleFill } from "react-icons/bs";
function Project() {
    const [num,setnum] = useState(8)
    const portdata = [
        {
            img: port4,
            des: "Designing and implementing the front-end using Reactjs, HTML5, CSS3, Bootstrap, and Javascript, also implementing events & functions and Moralis for storing NFT data.",
            title: "NFT Marketplace (CSDoge)",
            url: "https://nftartland.xyz/",
            test:false,
            button:"Open Website"
        },
        {
            img: port1,
            des: "Designing and implementing the front-end using Reactjs, HTML5, CSS3, Bootstrap, and Javascript, and also implementing events & functions.",
            title: "CSDOGE TOKEN SHOP",
            url: "https://grub.csdoge.club/",
            test:false,
            button:"Open Website"
        },
        {
            img: port13,
            des: "Designing and implementing the front-end using Reactjs, HTML5, CSS3, Bootstrap, and Javascript, and also implementing events & functions.",
            title: "NFT App (EVERGROW)",
            url: "https://clever-kowalevski-83de60.netlify.app/",
            test:true,
            button:"Open Website"
        },
        {
            img: port17,
            des: "Designed and developed a POS web application using Reactjs, Redux HTML5, CSS3, Javascript, BootStrap, react-charts, NodeJS, ExpressJS, MongoDB, and Firebase for google auth.",
            title: "POS WEB APP",
            url: "https://poswebapp.netlify.app/",
            test:false,
            button:"Open Website"
        }
    ]
    return (
        <section id='project'>
        <div className='portfolio'>
            <div className='container'>
                <div className='uptitle'>
                    <p data-aos="fade-up" style={{fontSize:50,fontWeight:'bold'}} data-aos-duration="1000">Project</p>
                    <h2 data-aos="fade-up" style={{fontSize:20,fontWeight:'initial'}} data-aos-duration="1000">(Some Of My Recent Projects)</h2>
                </div>
                <div className='row portfoliorow'>
                    {
                        portdata?.map((v, i) => {
                            return <div className='col-md-6 col-12 mt-4' data-aos="zoom-in-up" data-aos-duration="1000"> 
                                <div className='portcard'>
                                    <img src={v?.img} className='img-fluid' alt='port'/>
                                    <div className='detail'>
                                        <h2 style={{textAlign:'center'}}>{v?.title} {v?.test?<p style={{textAlign:'center'}}>(Testing)</p>:null}</h2>
                                        <p>{v.des}</p>
                                        <a href={v?.url} target="_blank">
                                        <button className='mt-2'>{v?.button} <BsFillArrowUpRightCircleFill/></button>
                                        </a>
                                       
                                    </div>

                                </div>

                            </div>
                        })
                    }
                





                </div>
            </div>

        </div>
        </section>
    )
}

export default Project
