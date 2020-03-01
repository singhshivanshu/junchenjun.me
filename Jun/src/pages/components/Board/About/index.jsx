import React from 'react'
import { Linkedin, Github } from '@icons-pack/react-simple-icons'
import Mail from '../mail.svg'
import YesSvg from '../YesSvg.svg'

const About = () => {
    return (
        <div>
            <h1>Hi, I am Jun.</h1>
            <hr />
            <p>Web developer.</p>
            <p>Have a soft spot for beactifully designed websites.</p>
            <p>
                Currently a master student at uOttawa studying Computer Science.
            </p>
            <hr />
            <p>
                Download my <a>resume</a>. Or:
            </p>
            <ul className="contact-section">
                <li className="contact-icon">
                    <Linkedin color="#ffffff" /> <span>LinkedIn</span>
                </li>
                <li className="contact-icon">
                    <Github color="#ffffff" /> <span>Github</span>
                </li>
                <li className="contact-icon">
                    <Mail /> <span>Email</span>
                </li>
            </ul>
            <div className="yes-svg-wrapper">
                <YesSvg className="yes-svg" />
            </div>
        </div>
    )
}

export default About
