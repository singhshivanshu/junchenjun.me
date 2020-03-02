import React from 'react'
import { isMobileOnly } from 'react-device-detect'
import MobileMenu from './MobileMenu/index'
import CommenMenu from './CommenMenu/index'

const Menu = props => {
    const { setPage } = props

    return isMobileOnly ? (
        <MobileMenu setPage={setPage} />
    ) : (
        <CommenMenu setPage={setPage} />
    )
}

export default Menu
