import React, { useState, useEffect } from 'react'
import { Router } from '../../constants'

const Menu = props => {
    const [highlight, setHighlight] = useState([initialHightlightState])

    let initialHightlightState

    useEffect(() => {
        Object.keys(Router).map(item => {
            initialHightlightState = { ...initialHightlightState, [item]: '' }
        })
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
                            return setPage(item)
                        }}
                        className={highlight[item]}
                    >
                        {item}
                    </h1>
                </div>
            ))}
        </nav>
    )
}

export default Menu
