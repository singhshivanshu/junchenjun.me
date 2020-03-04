import React, { useState } from 'react'
import Burger from '../Burger/index'
import { useSpring, animated } from 'react-spring'
import fadeInFromLeft from '../../../utilities/animations/fadeInFromLeft'
import router from '../../../utilities/constants/Router'

const MobileMenu = props => {
    const { setPage } = props
    const [open, setOpen] = useState(true)

    const animatedProps = useSpring(fadeInFromLeft)

    return (
        <div>
            <Burger open={open} setOpen={setOpen} />
            <nav
                className={
                    'mobile-menu ' +
                    (open ? 'mobile-menu-open' : 'mobile-menu-close')
                }
            >
                {Object.keys(router).map(item => (
                    <animated.div key={item} style={animatedProps}>
                        <h1
                            className="menu-item"
                            onClick={() => {
                                // document.getElementById('board').scrollTop = 0
                                // document.body.scrollTop = 0
                                window.scrollTo(0, 0)
                                setOpen(!open)
                                return setPage(item)
                            }}
                        >
                            {item}
                        </h1>
                    </animated.div>
                ))}
            </nav>
        </div>
    )
}

export default MobileMenu
