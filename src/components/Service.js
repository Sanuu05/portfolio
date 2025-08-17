import React from 'react'
import { TiCode} from "react-icons/ti";
import { MdDevices,MdShoppingCart,MdOutlineAppRegistration } from "react-icons/md";
import Aos from 'aos';
const servicelist = [
    {
        logo:<TiCode/>,
        title:"Full-Stack Web Development",
        des:'Building robust web applications using MERN stack (MongoDB, Express.js, React.js, Node.js). From concept to deployment, I create scalable solutions that drive business growth.'

    },
    {
        logo:<MdOutlineAppRegistration/>,
        title:"React Native Mobile Apps",
        des:'Developing high-performance cross-platform mobile applications with React Native. Single codebase for both iOS and Android, ensuring faster development and consistent user experience.'

    },
    {
        logo:<MdDevices/>,
        title:"Responsive UI/UX Design",
        des:'Creating pixel-perfect, responsive designs that work seamlessly across all devices. Focus on user experience, accessibility, and modern design principles to maximize engagement.'

    },
    {
        logo:<MdShoppingCart/>,
        title:"E-Commerce Solutions",
        des:'Building secure, scalable e-commerce platforms with payment gateways, inventory management, and admin dashboards. From small shops to enterprise solutions.'

    }
]
function Service() {
    return (
        <section id='service'>
        <div className='service' >
            <div className='container'>
                <div className='uptitle pt-5' >
                    <p data-aos="zoom-in-down" data-aos-duration="1000">Service</p>
                    <h2 data-aos="zoom-in-down" data-aos-duration="1000">My Service</h2>
                </div>
                <div className='row servicerow'>
                    
                    {
                        servicelist?.map((v,i)=>{
                            return <div className='col-md-6 col-xl-3 px-2 mt-3'>
                            <div className='cardx ' data-aos="zoom-in" data-aos-duration="1000" >
                                {v.logo}
                                <h3>{v.title}</h3>
                                <p>{v.des}</p>
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

export default Service
