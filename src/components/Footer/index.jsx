import React from 'react'
import fadeInFromLeft from '../../utilities/animations/fadeInFromLeft'
import { useSpring, animated } from 'react-spring'

const Footer = () => {
    const animatedProps = useSpring(fadeInFromLeft)
    return (
        <animated.footer className="footer" style={animatedProps}>
            &copy;2020 Jun Chen
        </animated.footer>
    )
}

export default Footer
