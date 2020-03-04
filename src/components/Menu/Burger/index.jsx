import React from 'react'
import { useSpring, animated } from 'react-spring'
import fadeInFromLeft from '../../../utilities/animations/fadeInFromLeft'

const Burger = ({ open, setOpen }) => {
    const animatedProps = useSpring(fadeInFromLeft)
    return (
        <animated.div className="burger" style={animatedProps}>
            <button
                className={
                    'hamburger hamburger--arrow-r ' + (open ? 'is-active' : '')
                }
                type="button"
                open={open}
                onClick={() => {
                    return setOpen(!open)
                }}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </animated.div>
    )
}

export default Burger
