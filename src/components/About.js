import React from 'react'
import BackgroundAnimation from './BackgroundAnimation'


function About() {
    return (
        <section id='about' >
        <div className='about' >
            <div className='container'>
                <div className='row' >
                    <div className='col-md-6 aboutleft'>
                        <BackgroundAnimation />
                        {/* <img src={gif1} className='img-fluid' /> */}
                        
                    </div>
                    <div className='col-md-6 aboutright'>
                        <h2 data-aos="fade-left" data-aos-duration="1000" >about me .</h2>
                        <p data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300" >Hi, I'm Shantanu Saha , Freelance MERN Stack Developer with 1 plus year of experience in both front-end and back-end development, and performing quality assurance. Excellent knowledge in using HTML5, CSS3, SASS, JavaScript, ReactJS, Bootstrap , MongoDB , MYSQL, ExpressJS,Node.JS, Figma, Firebase. I care about writing clean code and genuinely love developing new applications and learning more
                        </p>
                        <p data-aos="fade-left" data-aos-duration="1000"  data-aos-offset="300">I enjoy taking complex project and turning it into simple yet beautiful websites with great user experience .</p>
                        {/* <p>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</p> */}


                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About
