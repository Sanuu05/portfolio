import React from 'react'
import { TiCode } from "react-icons/ti";
import { MdDevices, MdShoppingCart } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const servicelist = [
    {
        logo: <TiCode />,
        title: "Full-Stack Web Applications",
        des: 'Building enterprise-grade web applications with the MERN stack — React.js, Node.js, Express.js, and MongoDB. Specialized in admin dashboards, real-time data platforms, and scalable REST APIs.',
        highlights: ["MERN Stack", "Admin Dashboards", "Real-time Apps", "Enterprise Grade"]
    },
    {
        logo: <MdDevices />,
        title: "React Native Mobile Apps",
        des: 'Developing high-performance cross-platform mobile apps with React Native — single codebase, native feel on both iOS and Android. Expertise in offline sync, state management, and mobile-specific UX patterns.',
        highlights: ["Cross-platform", "iOS & Android", "Offline Sync", "Native Performance"]
    },
    {
        logo: <MdShoppingCart />,
        title: "E-Commerce & Payment Systems",
        des: 'Creating secure, scalable e-commerce platforms with integrated payment gateways (Razorpay, Stripe). Full-featured storefronts, inventory management, order tracking, and responsive admin dashboards.',
        highlights: ["Razorpay & Stripe", "Inventory Management", "Order Tracking", "Secure Payments"]
    },
    {
        logo: <BsLightningChargeFill />,
        title: "Real-time & API Development",
        des: 'Building real-time systems with Socket.io, Firebase, and Pusher — live chat, push notifications, and event-driven architectures. Experienced in designing clean RESTful APIs and third-party integrations.',
        highlights: ["Socket.io", "Firebase", "REST APIs", "Push Notifications"]
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
                        <div key={index} className='service-card' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
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
