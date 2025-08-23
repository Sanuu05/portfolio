import React, { useState } from 'react'
import { AiFillInstagram, AiOutlineWhatsApp, AiFillLinkedin, AiOutlineSend,AiFillFacebook,AiFillTwitterSquare,AiFillGithub } from "react-icons/ai";
import { SiFiverr, SiTelegram } from "react-icons/si";
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './img/kogo4.png'

function Contact() {
    const [dat, setdat] = useState({
        name: '', email: '', mobile: '', message: ''
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const submit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const { data } = await Axios.post("https://devohut.herokuapp.com/msg/postmsg", dat)
            toast.success('Message sent successfully! I\'ll get back to you soon. 🚀')
            setdat({
                name: '', email: '', mobile: '', message: ''
            })
        } catch (error) {
            toast.error('Oops! Something went wrong. Please try again or reach out directly.')
        } finally {
            setIsSubmitting(false)
        }
    }
    
    return (
        <section id='contactme' className='contact-section'>
            <div className='contact'>
                <div className='container'>
                    <div className='row contactrow align-items-center'>
                        <div className='col-md-6'>
                            <div className='contact-info'>
                                <p className='contact-subtitle' data-aos="fade-right" data-aos-duration="1000">
                                    Let's Connect
                                </p>
                                <h2 className='contact-title' data-aos="fade-right" data-aos-duration="1200">
                                    Ready to Build Something Amazing?
                                </h2>
                                <h3 className='contact-description' data-aos="fade-right" data-aos-duration="1500">
                                    I'm passionate about turning your ideas into reality. Whether you need a website, mobile app, or custom solution, let's discuss how I can help bring your vision to life.
                                </h3>
                                
                                <div className='contact-highlights' data-aos="fade-right" data-aos-duration="1800">
                                    <div className='highlight-item'>
                                        <span>Open to permanent positions & freelance projects</span>
                                    </div>
                                    <div className='highlight-item'>
                                        <span>Quick response time & professional communication</span>
                                    </div>
                                    <div className='highlight-item'>
                                        <span>Committed to quality delivery & long-term success</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-md-6 contactright'>
                            <div className='contactcard'>
                                <div className='form'>
                                    <h4 className='form-title'>Send me a message</h4>
                                    <form autoComplete='OFF' onSubmit={submit}>
                                        <div className='form-group'>
                                            <input 
                                                type="text" 
                                                placeholder='Your Name' 
                                                value={dat.name} 
                                                onChange={(e) => setdat({ ...dat, name: e.target.value })} 
                                                required 
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input 
                                                type="email" 
                                                placeholder='Your Email' 
                                                value={dat.email} 
                                                onChange={(e) => setdat({ ...dat, email: e.target.value })} 
                                                required 
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input 
                                                type="tel"  
                                                placeholder='Phone Number' 
                                                value={dat.mobile} 
                                                onChange={(e) => setdat({ ...dat, mobile: e.target.value })} 
                                                required 
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <textarea 
                                                placeholder='Tell me about your project...' 
                                                value={dat.message} 
                                                onChange={(e) => setdat({ ...dat, message: e.target.value })} 
                                                required 
                                            />
                                        </div>
                                        <button 
                                            type='submit' 
                                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'} 
                                            <AiOutlineSend />
                                        </button>
                                    </form>
                                </div>
                                
                                <div className='contact-divider'>
                                    <span className='divider-text'>OR</span>
                                </div>
                                
                                <div className='social-connect'>
                                    <p className='social-title'>Connect with me directly</p>
                                    <div className='social-links'>
                                        <a href='https://www.instagram.com/themerndeveloper' target="_blank" rel="noopener noreferrer" className='social-link instagram'>
                                            <AiFillInstagram />
                                        </a>
                                        <a href='https://api.whatsapp.com/send/?phone=917047416015&text&app_absent=0' target="_blank" rel="noopener noreferrer" className='social-link whatsapp'>
                                            <AiOutlineWhatsApp />
                                        </a>
                                        <a href='https://www.linkedin.com/in/shantanu-saha-5717b7148/' target="_blank" rel="noopener noreferrer" className='social-link linkedin'>
                                            <AiFillLinkedin />
                                        </a>
                                        <a href='https://github.com/Sanuu05' target="_blank" rel="noopener noreferrer" className='social-link github'>
                                            <AiFillGithub />
                                        </a>
                                        <a href='https://t.me/sanuu_mern' target="_blank" rel="noopener noreferrer" className='social-link telegram'>
                                            <SiTelegram />
                                        </a>
                                        <a href='https://www.facebook.com/themerndeveloper' target="_blank" rel="noopener noreferrer" className='social-link facebook'>
                                            <AiFillFacebook />
                                        </a>
                                        <a href='https://twitter.com/shantansaha' target="_blank" rel="noopener noreferrer" className='social-link twitter'>
                                            <AiFillTwitterSquare />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
            
            <div className='footer'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-4 footleft'>
                           <img src={logo} className='footerlogo' alt='Shantanu Saha - Portfolio' />
                        </div>
                        <div className='col-md-8 footright'>
                            <p className='copyright-text'>
                                © Copyright {new Date().getFullYear()} Shantanu Saha. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
