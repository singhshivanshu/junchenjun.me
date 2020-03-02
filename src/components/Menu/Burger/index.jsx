import React from 'react'

const Burger = ({ open, setOpen }) => {
    return (
        <div className="burger">
            <button
                className={
                    'hamburger hamburger--arrow-r ' + (open ? 'is-active' : '')
                }
                type="button"
                open={open}
                onClick={() => {
                    console.log('open')
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
