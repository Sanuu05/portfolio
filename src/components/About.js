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
                        <p data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300" >Hello there! I'm Shantanu Saha, a passionate Full-Stack Developer specializing in MERN Stack and React Native. With over 2 years of experience, I bridge the gap between web and mobile development, creating seamless digital experiences across all platforms.</p>
                        
                        <p data-aos="fade-left" data-aos-duration="1000"  data-aos-offset="300">My tech stack includes React.js, React Native, Node.js, Express.js, MongoDB, MySQL, Firebase, and modern front-end technologies. I believe in writing clean, maintainable code that not only works flawlessly but also provides exceptional user experiences.</p>
                        
                        <p data-aos="fade-left" data-aos-duration="1000"  data-aos-offset="300">What drives me is transforming complex ideas into elegant, user-friendly applications. Whether it's a responsive web app or a cross-platform mobile solution, I'm committed to delivering high-quality, scalable solutions that help businesses grow and succeed in the digital world.</p>


                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About
