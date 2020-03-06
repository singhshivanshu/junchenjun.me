import React, { useState } from 'react'
import Burger from '../Burger/index'
import router from '../../../utilities/constants/router'
import FadeInFromLeft from '../../Commen/FadeInFromLeft/index'

const MobileMenu = props => {
    const { setPage } = props
    const [open, setOpen] = useState(true)

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
                    <FadeInFromLeft key={item}>
                        <div>
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
                        </div>
                    </FadeInFromLeft>
                ))}
            </nav>
        </div>
    )
}

export default MobileMenu
