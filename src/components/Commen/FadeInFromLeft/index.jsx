import React from 'react'
import { useSpring, animated } from 'react-spring'

const FadeInFromLeft = ({ diableOnMobile = false, children }) => {
    let animatedProps = useSpring({
        transform: 'translateX(0)',
        opacity: 1,
        from: { transform: 'translateX(-0.5rem)', opacity: 0 },
    })

    if (typeof window !== `undefined`) {
        const { innerWidth: width } = window
        if (width < 500 && diableOnMobile) {
            animatedProps = null
        }
    }

    return <animated.div style={animatedProps}>{children}</animated.div>
}

export default FadeInFromLeft
