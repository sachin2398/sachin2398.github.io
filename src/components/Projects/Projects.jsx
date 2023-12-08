import React from 'react'
import greenParadise from "./projectImages/GreenParadise.png"
import woodFans from "./projectImages/WoodFans.png"
import bewakoof from "./projectImages/Bewakoof.png"
import "./Project.css"
import { motion } from "framer-motion"

const data = [
    {
        img: woodFans,
        projectTitle: "Jio Mart",
        techStack: ["React", "Redux", "CSS", "Firebase"],
        description: "Jio Mart is a clone of online e-commerce website Jio Mart.com where you will find wide varity of different catagory  products. Many functionalities are provided in the web application like login/signup, cart and filtering the products with its category.",
        githubLink: "https://github.com/sachin2398/jio-mart",
        appLink: "https://jiomart-com-rct-201-shashikantrupin.vercel.app/"
    },
    {
        img: greenParadise,
        projectTitle: "Hotel",
        techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
        description: "Our hotel website is a showcase of sophistication and convenience. Its intuitive interface guides visitors through a visual journey of our exquisite accommodations, tempting them with breathtaking images and detailed information. With seamless booking capabilities, personalized experiences, and engaging content, our website ensures that every guest's expectations are met even before they arrive. It's not just a platform; it's a portal to an unforgettable stay, inviting guests to explore, dream, and book with ease.",
        githubLink: "https://github.com/swatii23/glorious-calendar-2511",
        appLink: "https://653652c73f8e7f008122786e--elegant-pudding-10faed.netlify.app/"
    },
    {
        img: bewakoof,
        projectTitle: "Nykaa",
        techStack: ["HTML", "CSS", "JavaScript",],
        description: "Nykaa is a clone of online e-commerce website nykaa.com where you will find wide varity of different catagory beauty products for women and girls. Many functionalities are provided in the web application like login/signup, cart and filtering the beauty products with its category.",
        githubLink: "https://github.com/sachin2398/Nykaa-Project/tree/main/Nykka%20project-final-final/Nykka%20project",
        appLink: "https://651428efa7339b1743627d39--beamish-llama-315f67.netlify.app/"
    }, {
        img: greenParadise,
        projectTitle: "Hotel",
        techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
        description: "Our hotel website is a showcase of sophistication and convenience. Its intuitive interface guides visitors through a visual journey of our exquisite accommodations, tempting them with breathtaking images and detailed information. With seamless booking capabilities, personalized experiences, and engaging content, our website ensures that every guest's expectations are met even before they arrive. It's not just a platform; it's a portal to an unforgettable stay, inviting guests to explore, dream, and book with ease.",
        githubLink: "https://github.com/swatii23/glorious-calendar-2511",
        appLink: "https://653652c73f8e7f008122786e--elegant-pudding-10faed.netlify.app/"
    }
]




function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects