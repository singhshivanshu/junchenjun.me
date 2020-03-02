import React from 'react'
import About from './About/index'
import Skills from './Skills/index'
import Router from '../../constants/Router'
import { isMobileOnly } from 'react-device-detect'

const Board = props => {
    const { page } = props
    const xxx = '111 board ' + (isMobileOnly ? '333' : '222')
    console.log(999, xxx)
    return (
        <section className={xxx}>
            <div className="board-content">
                {page == Router.About && <About />}
                {page == Router.Skills && <Skills />}
            </div>
        </section>
    )
}

export default Board
