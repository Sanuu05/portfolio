import React from 'react'
import html from '../components/img/html.png'
import css from '../components/img/css.png'
import java from '../components/img/java.png'
import react from '../components/img/react.png'
import node from '../components/img/node.svg'
import mongo from '../components/img/mongo.svg'
import git from '../components/img/git.png'
import fire from '../components/img/fire.png'
import boot from '../components/img/boot.svg'
import mat from '../components/img/mat.png'
import sass from '../components/img/sass.png'
import expre from '../components/img/express.png'
import mysql from '../components/img/mysql.png'
import redux from '../components/img/redux.png'
import vite from '../components/img/vite.png'
import docker from '../components/img/docker.png'
import redis from '../components/img/redis.png'
import jira from '../components/img/jira.png'
import aws from '../components/img/aws.png'
import ec2 from '../components/img/ec2.png'
import lambda from '../components/img/lambda.png'
import s3 from '../components/img/s3.png'
import nextjs from '../components/img/nextjs.svg'
import typescript from '../components/img/typescript.svg'

const skillCategories = [
    {
        category: "Frontend Development",
        skills: [
            { logo: html, title: 'HTML5' },
            { logo: css, title: 'CSS3' },
            { logo: sass, title: 'SASS' },
            { logo: java, title: 'JavaScript' },
            { logo: react, title: 'React.js' },
            { logo: react, title: 'React Native' },
            { logo: nextjs, title: 'Next.js' },
            { logo: typescript, title: 'TypeScript' },
            { logo: redux, title: 'Redux' },
            { logo: boot, title: 'Bootstrap' },
            { logo: mat, title: 'Material UI' },
            { logo: vite, title: 'Vite' }
        ]
    },
    {
        category: "Backend Development",
        skills: [
            { logo: node, title: 'Node.js' },
            { logo: expre, title: 'Express.js' },
            { logo: mongo, title: 'MongoDB' },
            { logo: mysql, title: 'MySQL' },
            { logo: fire, title: 'Firebase' },
            { logo: redis, title: 'Redis' }
        ]
    },
    {
        category: "DevOps & Tools",
        skills: [
            { logo: git, title: 'Git & GitHub' },
            { logo: docker, title: 'Docker' },
            { logo: jira, title: 'Jira' },
            { logo: ec2, title: 'AWS EC2' },
            { logo: s3, title: 'AWS S3' },
            { logo: lambda, title: 'AWS Lambda' }
        ]
    }
]

function Skills() {
    return (
        <section id='Skill' className='skills-section'>
            <div className='container'>
                <div className='skills-header' data-aos="fade-up" data-aos-duration="1000">
                    <p className='skills-subtitle'>Skills</p>
                    <h2 className='skills-title'>My Skills</h2>
                    <p className='skills-description'>
                        Technologies and tools I use to build modern applications
                    </p>
                </div>
                
                {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className='skill-category-wrapper' data-aos="fade-up" data-aos-duration="1000">
                        <div className='skill-category'>
                            <div className='category-header'>
                                <h3 className='category-title' data-aos="fade-left" data-aos-duration="1000">
                                    {category.category}
                                </h3>
                            </div>
                            <div className='skills-grid'>
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className='skill-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={skillIndex * 100}>
                                        <div className='skill-card-header'>
                                            <div className='skill-logo'>
                                                <img src={skill.logo} alt={skill.title} />
                                            </div>
                                            <div className='skill-info'>
                                                <h4 className='skill-title'>{skill.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                
                <div className='skills-summary' data-aos="fade-up" data-aos-duration="1000">
                    <div className='summary-card'>
                        <h3>Ready to Build Something Amazing?</h3>
                        <p>
                            Let's discuss how we can bring your ideas to life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
