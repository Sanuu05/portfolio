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
                        <p data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300" >Hello there! My name is Shantanu Saha, and I am a Freelance MERN Stack Developer with over a year of experience in the field. My expertise lies in both front-end and back-end development, as well as quality assurance.

</p>
                        <p data-aos="fade-left" data-aos-duration="1000"  data-aos-offset="300">With a deep understanding of HTML5, CSS3, SASS, JavaScript, ReactJS, Bootstrap, MongoDB, MYSQL, ExpressJS, Node.JS, Figma, and Firebase, I take great pride in developing clean and elegant code that not only functions flawlessly but also provides a remarkable user experience.</p>
                        {/* <p>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</p> */}
                        <p data-aos="fade-left" data-aos-duration="1000"  data-aos-offset="300">For me, taking a complex project and transforming it into a simple yet beautiful website that offers an exceptional user experience is what motivates me every day. I am passionate about learning new skills and staying up-to-date with the latest trends in the industry to ensure that I am always providing my clients with the best possible solutions.</p>


                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About
