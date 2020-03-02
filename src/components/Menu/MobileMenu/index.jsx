import React, { useState } from 'react'
import Burger from '../Burger/index'
import Router from '../../../constants/Router'

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
                {Object.keys(Router).map(item => (
                    <div key={item}>
                        <h1
                            className="menu-item"
                            onClick={() => {
                                setOpen(!open)
                                return setPage(item)
                            }}
                        >
                            {item}
                        </h1>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default MobileMenu
