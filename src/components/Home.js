import React, { useEffect } from 'react'
// import {gsap} from 'react-gsap'
import { gsap } from "gsap";
import BackgroundAnimation from './BackgroundAnimation';
import { AiFillInstagram, AiOutlineWhatsApp, AiFillLinkedin,AiFillFacebook,AiFillTwitterSquare,AiFillGithub } from "react-icons/ai";
import { SiFiverr, SiTelegram } from "react-icons/si";
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
        <section id="homee">
            {/* <div id="loader">
                <div id="wrapperload">
                    <div class="elem">
                  
                        <h1>Shantanu Saha</h1>
                    </div>
                    <div class="elem">
                        <h3>MERN/Full-Stack Developer</h3>
                    </div>
                    <div class="elem">
                        <h3>loves to help buisness.</h3>
                    </div>
                    <div class="elem">
                        
                        <h3>Welcome</h3>
                    </div>
                </div>
            </div> */}

            <div id="bg" >
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12 homeleft'>
                            <div id="left">
                                <div id="smline"></div>
                                <h4 class="leftitem">Hello, I'm 👋</h4>
                                {/* <img class="leftitem" src="./imgs/name.png" alt=""> */}
                                <h4 class="leftitem" id="lblue">Shantanu Saha</h4>
                         

                                <h5 class="leftitem">A passionate <span id="lblue">Full-Stack Developer</span> specializing in <span id="lblue">MERN Stack</span> and <span id="lblue">React Native</span> from <span id="lblue">India.</span></h5>
                                <p class="leftitem" style={{fontSize: '16px', color: '#666', marginBottom: '20px'}}>I transform ideas into powerful, scalable web and mobile applications with modern technologies and clean code.</p>
                                <a href='/#contactme' className='contactbtn leftitem'>Let's Build Something Amazing</a>
                                 <div className='social d-md-none d-block'>
                                    <a href='https://www.instagram.com/themerndeveloper' target="_blank"><AiFillInstagram class="leftitem" /></a>
                                    <a href='https://api.whatsapp.com/send/?phone=917047416015&text&app_absent=0' target="_blank" ><AiOutlineWhatsApp class="leftitem" /></a>
                                    <a href='https://www.linkedin.com/in/shantanu-saha-5717b7148/' target="_blank" ><AiFillLinkedin class="leftitem" /></a>
                                    {/* <a href='https://www.fiverr.com/shantanusaha' target="_blank" ><SiFiverr class="leftitem" /></a> */}
                                    <a href='https://github.com/Sanuu05' target="_blank" ><AiFillGithub className='leftitem' /></a>
                                    <a href='https://t.me/sanuu_mern' target="_blank" ><SiTelegram className='leftitem' /></a>
                                    <a href='https://www.facebook.com/themerndeveloper' target="_blank" ><AiFillFacebook className='leftitem' /></a>
                                    <a href='https://twitter.com/shantansaha ' target="_blank" ><AiFillTwitterSquare className='leftitem' /></a>






                                    {/* <p>dsdsadsd</p> */}
                                </div>
                                <div class="leftitem" id="playbtn">
                                    {/* <img src="./imgs/playButton.png" alt=""> */}
                                    {/* <h5>see my <span class="bold">work profile</span></h5> */}
                                </div>
                                <div class="leftitem" id="contact">
                                    {/* <h3>Contact me</h3>
                            <h6>Email : <span>someone@email.com</span></h6>
                            <h6>Contact Number: <span>+91-123456789</span></h6> */}
                                </div>
                            </div>

                        </div>
                        <div className='col-md-6 col-12 home_right '>
                            <div id="right">

                                <BackgroundAnimation id="svgr" />
                                <div className='social d-md-block d-block' id='r1'>
                                    <a href='https://www.instagram.com/themerndeveloper' target="_blank" ><AiFillInstagram class="leftitem" /></a>
                                    <a href='https://api.whatsapp.com/send/?phone=917047416015&text&app_absent=0' target="_blank" ><AiOutlineWhatsApp class="leftitem" /></a>
                                    <a href='https://www.linkedin.com/in/shantanu-saha-5717b7148/' target="_blank" ><AiFillLinkedin class="leftitem" /></a>
                                    {/* <a href='https://www.fiverr.com/shantanusaha' target="_blank" ><SiFiverr class="leftitem" /></a> */}
                                    <a href='https://github.com/Sanuu05' target="_blank" ><AiFillGithub className='leftitem' /></a>
                                    <a href='https://t.me/sanuu_mern' target="_blank" ><SiTelegram className='leftitem' /></a>
                                    <a href='https://www.facebook.com/themerndeveloper' target="_blank" ><AiFillFacebook className='leftitem' /></a>
                                    <a href='https://twitter.com/shantansaha' target="_blank" ><AiFillTwitterSquare className='leftitem' /></a>
                                    {/* <p>dsdsadsd</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Home
