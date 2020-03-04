import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import fadeInFromLeft from '../../../utilities/animations/fadeInFromLeft'
import router from '../../../utilities/constants/router'

const CommenMenu = props => {
    let initialHightlightState = ''

    Object.keys(router).map(item => {
        initialHightlightState = {
            ...initialHightlightState,
            [item]: '',
        }
    })

    const [highlight, setHighlight] = useState(initialHightlightState)

    useEffect(() => {
        setHighlight({
            ...initialHightlightState,
            [router.About]: 'highlight',
        })
    }, [])

    const { setPage } = props

    const animatedProps = useSpring(fadeInFromLeft)

    return (
        <nav className="menu">
            {Object.keys(router).map(item => (
                <animated.div key={item} style={animatedProps}>
                    <h1
                        onClick={() => {
                            setHighlight({
                                ...initialHightlightState,
                                [item]: 'highlight',
                            })
                            // document.body.scrollTop = 0
                            // window.scrollTo(0, 0)
                            document.getElementById('board').scrollTop = 0
                            return setPage(item)
                        }}
                        className={'menu-item ' + highlight[item]}
                    >
                        {item}
                    </h1>
                </animated.div>
            ))}
        </nav>
    )
}

export default CommenMenu
