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
const skillCategories = [
    {
        category: "Frontend Development",
        // icon: "🎨",
        description: "Creating beautiful and responsive user interfaces",
        skills: [
            { logo: html, title: 'HTML5', proficiency: 95 },
            { logo: css, title: 'CSS3', proficiency: 90 },
            { logo: sass, title: 'SASS', proficiency: 85 },
            { logo: java, title: 'JavaScript', proficiency: 88 },
            { logo: react, title: 'React.js', proficiency: 92 },
            { logo: react, title: 'React Native', proficiency: 85 },
            { logo: redux, title: 'Redux', proficiency: 80 },
            { logo: boot, title: 'Bootstrap', proficiency: 90 },
            { logo: mat, title: 'Material UI', proficiency: 85 },
            { logo: vite, title: 'Vite', proficiency: 82 }
        ]
    },
    {
        category: "Backend Development",
        // icon: "⚙️",
        description: "Building robust server-side applications and APIs",
        skills: [
            { logo: node, title: 'Node.js', proficiency: 88 },
            { logo: expre, title: 'Express.js', proficiency: 85 },
            { logo: mongo, title: 'MongoDB', proficiency: 82 },
            { logo: mysql, title: 'MySQL', proficiency: 80 },
            { logo: fire, title: 'Firebase', proficiency: 85 },
            { logo: redis, title: 'Redis', proficiency: 78 }
        ]
    },
    {
        category: "DevOps & Tools",
        // icon: "🛠️",
        description: "Essential tools for modern development workflow",
        skills: [
            { logo: git, title: 'Git & GitHub', proficiency: 90 },
            { logo: docker, title: 'Docker', proficiency: 75 },
            { logo: jira, title: 'Jira', proficiency: 80 },
            { logo: ec2, title: 'AWS EC2', proficiency: 70 },
            { logo: s3, title: 'AWS S3', proficiency: 75 },
            // { logo: aws, title: 'AWS RDS', proficiency: 70 },
            { logo: lambda, title: 'AWS Lambda', proficiency: 65 }
        ]
    }
]

function Skills() {
    return (
        <section id='Skill'>
            <div className='skills'>
                <div className='container'>
                    <div className='skillrowa'>
                        <div className='uptitle'>
                            <p data-aos="fade-up" data-aos-duration="1000">Skills</p>
                            <h2 data-aos="fade-up" data-aos-duration="1000">My Skills</h2>
                            <div data-aos="fade-up" data-aos-duration="1000"></div>
                        </div>
                        
                        {skillCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className='skill-category' data-aos="fade-up" data-aos-duration="1000">
                                <div className='category-header'>
                                    <span className='category-icon'>{category.icon}</span>
                                    <h3 className='category-title' data-aos="fade-left" data-aos-duration="1000">
                                        {category.category}
                                    </h3>
                                    <p className='category-description' data-aos="fade-right" data-aos-duration="1000">
                                        {category.description}
                                    </p>
                                </div>
                                <div className='skillrow'>
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className='skillcard' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={skillIndex * 100}>
                                            <div className='skillcard-inner'>
                                                <div className='skimg'>
                                                    {skill.icon ? (
                                                        <span className='skill-icon'>{skill.icon}</span>
                                                    ) : (
                                                        <img src={skill.logo} className='img-fluid' alt={skill.title} />
                                                    )}
                                                </div>
                                                <h2 className='skill-title'>{skill.title}</h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
