import React, { useState, useEffect } from 'react'
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

    return (
        <nav className="menu">
            {Object.keys(router).map(item => (
                <div key={item} className="fade-in-from-left">
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
            ))}
        </nav>
    )
}

export default CommenMenu
