import React, { useState, useEffect } from 'react'
import Router from '../../../../constants/Router'

const Menu = props => {
    let initialHightlightState = ''
    Object.keys(Router).map(item => {
        initialHightlightState = { ...initialHightlightState, [item]: '' }
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
