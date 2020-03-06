import React from 'react'
import About from './About/index'
import Skills from './Skills/index'
import Experience from './Experience/index'
import router from '../../utilities/constants/router'

const Board = props => {
    const { page } = props

    return (
        <section className={'board'} id="board">
            <div className="board-content">
                {page == router.About && <About />}
                {page == router.Skills && <Skills />}
                {page == router.Experience && <Experience />}
            </div>
        </section>
    )
}

export default Board
