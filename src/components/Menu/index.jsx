import React from 'react'
import MobileMenu from './MobileMenu/index'
import CommenMenu from './CommenMenu/index'

const Menu = props => {
    const { setPage } = props

    return (
        <div>
            <MobileMenu setPage={setPage} />
            <CommenMenu setPage={setPage} />
        </div>
    )
}

export default Menu
