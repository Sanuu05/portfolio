import React from 'react'
import { TiCode} from "react-icons/ti";
import { MdDevices,MdShoppingCart,MdOutlineAppRegistration } from "react-icons/md";
import Aos from 'aos';

const servicelist = [
    {
        logo:<TiCode/>,
        title:"Full-Stack Web Applications",
        des:'Building enterprise-grade web applications with MERN stack. Specialized in POS systems, e-commerce platforms, and real-time applications. Technologies: React.js, Node.js, Express.js, MongoDB, Firebase, Redux, and modern JavaScript.',
        highlights: ["MERN Stack", "POS Systems", "Real-time Apps", "Enterprise Grade"]
    },
    {
        logo:<MdOutlineAppRegistration/>,
        title:"React Native Mobile Apps",
        des:'Developing high-performance cross-platform mobile applications with React Native. Single codebase for iOS and Android with native performance. Expertise in state management, API integration, and mobile-specific UI/UX patterns.',
        highlights: ["Cross-platform", "Native Performance", "State Management", "API Integration"]
    },
    {
        logo:<MdDevices/>,
        title:"E-Commerce & Payment Systems",
        des:'Creating secure, scalable e-commerce platforms with integrated payment gateways. Built token shops, POS systems, and inventory management solutions. Expertise in Stripe, PayPal, and custom payment integrations.',
        highlights: ["Secure Payments", "POS Systems", "Inventory Management", "Payment Gateways"]
    },
    {
        logo:<MdShoppingCart/>,
        title:"SaaS & Business Applications",
        des:'Building scalable Software-as-a-Service applications for businesses. Experience with subscription management, user authentication, admin dashboards, and multi-tenant architectures. Focus on scalability and business logic.',
        highlights: ["Subscription Management", "Admin Dashboards", "Multi-tenant", "Scalable Architecture"]
    }
]

function Service() {
    return (
        <section id='service' className='service-section'>
            <div className='container'>
                <div className='service-header' data-aos="fade-up" data-aos-duration="1000">
                    <p className='service-subtitle'>Services</p>
                    <h2 className='service-title'>What I Offer</h2>
                    <p className='service-description'>
                        Comprehensive development services tailored to meet your business needs and drive digital transformation
                    </p>
                </div>
                
                <div className='service-grid'>
                    {servicelist?.map((service, index) => (
                        <div key={index} className='service-card' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 150}>
                            <div className='service-icon'>
                                {service.logo}
                            </div>
                            <div className='service-content'>
                                <h3 className='service-card-title'>{service.title}</h3>
                                <p className='service-description-text'>{service.des}</p>
                                <div className='service-highlights'>
                                    {service.highlights.map((highlight, idx) => (
                                        <span key={idx} className='highlight-tag'>{highlight}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service
