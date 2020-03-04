import React from 'react'
import Contact from '../Contact/index'
import { useSpring, animated } from 'react-spring'
import fadeInFromLeft from '../../../utilities/animations/fadeInFromLeft'

const About = () => {
    const animatedProps = useSpring(fadeInFromLeft)
    return (
        <animated.section className="about" style={animatedProps}>
            <h1 className="about-title">Hi, I am Jun. 👋 </h1>
            <ul>
                <li> I am a web developer. </li>
                <li>
                    Currently a master student at uOttawa studying Computer
                    Science.
                </li>
                <li>A fast learner and always open to new poossibilities.</li>
                <li> Have a soft spot for nicely designed websites~</li>
            </ul>

            <Contact />
        </animated.section>
    )
}

export default About
