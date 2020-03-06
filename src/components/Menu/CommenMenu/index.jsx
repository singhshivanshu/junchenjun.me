import React, { useState, useEffect } from 'react'
import router from '../../../utilities/constants/router'
import FadeInFromLeft from '../../Commen/FadeInFromLeft/index'

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

    return (
        <nav className="menu">
            {Object.keys(router).map(item => (
                <FadeInFromLeft key={item}>
                    <div>
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
                    </div>
                </FadeInFromLeft>
            ))}
        </nav>
    )
}

export default CommenMenu
