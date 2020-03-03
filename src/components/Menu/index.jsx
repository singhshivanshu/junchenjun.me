import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileMenu from './MobileMenu/index'
import CommenMenu from './CommenMenu/index'

const Menu = props => {
    const { setPage } = props
    const isMobile = useMediaQuery({ maxWidth: 500 })

    return isMobile ? (
        <MobileMenu setPage={setPage} />
    ) : (
        <CommenMenu setPage={setPage} />
    )
}

export default Menu
