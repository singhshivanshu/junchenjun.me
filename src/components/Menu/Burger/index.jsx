import React from 'react'

const Burger = ({ open, setOpen }) => {
    return (
        <div className="burger fade-in-from-left">
            <button
                className={
                    'hamburger hamburger--arrow-r ' + (open ? 'is-active' : '')
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
        </div>
    )
}

export default Burger
