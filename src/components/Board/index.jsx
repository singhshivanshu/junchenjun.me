import React from 'react'
import About from './About/index'
import Skills from './Skills/index'
import Router from '../../constants/Router'
// import { isMobileOnly } from 'react-device-detect'
import Experience from './Experience/index'

const Board = props => {
    const { page } = props
    return (
        <section className={'board'} id="board">
            <div className="board-content">
                {page == Router.About && <About />}
                {page == Router.Skills && <Skills />}
                {page == Router.Experience && <Experience />}
            </div>
        </section>
    )
}

export default Board
