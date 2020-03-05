import React from 'react'
import { Linkedin, Github } from '@icons-pack/react-simple-icons'
import Mail from '../../../assets/icons/mail.inline.svg'
import { useSpring, animated } from 'react-spring'
import fadeInFromLeft from '../../../utilities/animations/fadeInFromLeft'
import WaveLine from '../../Commen/WaveLine/index'

const Contact = () => {
    let animatedProps
    if (typeof window !== `undefined`) {
        const { innerWidth: width } = window
        animatedProps = width > 500 ? useSpring(fadeInFromLeft) : null
    }

    return (
        <animated.section style={animatedProps}>
            <WaveLine />
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
