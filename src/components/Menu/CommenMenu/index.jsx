import React, { useState, useEffect } from 'react'
import Router from '../../../constants/Router'

const CommenMenu = props => {
    let initialHightlightState = ''

    Object.keys(Router).map(item => {
        initialHightlightState = {
            ...initialHightlightState,
            [item]: '',
        }
    })

    const [highlight, setHighlight] = useState(initialHightlightState)

    useEffect(() => {
        setHighlight({
            ...initialHightlightState,
            [Router.About]: 'highlight',
        })
    }, [])

    const { setPage } = props

    return (
        <nav className="menu">
            {Object.keys(Router).map(item => (
                <div key={item}>
                    <h1
                        onClick={() => {
                            setHighlight({
                                ...initialHightlightState,
                                [item]: 'highlight',
                            })
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
