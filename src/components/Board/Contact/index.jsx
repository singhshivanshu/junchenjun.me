import React from 'react'
import { Linkedin, Github } from '@icons-pack/react-simple-icons'
import Mail from '../../../assets/icons/Mail.svg'
import { useSpring, animated } from 'react-spring'
import fadeInFromLeft from '../../../utilities/animations/fadeInFromLeft'

const Contact = () => {
    const animatedProps = useSpring(fadeInFromLeft)

    return (
        <animated.section style={animatedProps}>
            <hr />
            <ul className="contact-section">
                <li className="contact-icon">
                    <a
                        href="https://www.linkedin.com/in/jun-chen-013995180/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin color="#ffffff" />
                    </a>
                </li>
                <li className="contact-icon">
                    <a
                        href="https://github.com/junchenjun"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github color="#ffffff" />
                    </a>
                </li>
                <li className="contact-icon">
                    <a
                        href="mailto:junchen.cq@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Mail />
                    </a>
                </li>
            </ul>
        </animated.section>
    )
}

export default Contact
