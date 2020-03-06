import React from 'react'
import FadeInFromLeft from '../../Commen/FadeInFromLeft/index'

const Burger = ({ open, setOpen }) => {
    return (
        <div className="burger">
            <FadeInFromLeft>
                <button
                    className={
                        'hamburger hamburger--arrow-r ' +
                        (open ? 'is-active' : '')
                    }
                    type="button"
                    open={open}
                    onClick={() => {
                        return setOpen(!open)
                    }}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </FadeInFromLeft>
        </div>
    )
}

export default Burger
