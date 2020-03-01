import React from 'react'
import About from './About/index'
import Skills from './Skills/index'
import Router from '../../../../constants/Router'

const Board = props => {
    const { page } = props
    return (
        <section className="board">
            <div className="board-content">
                {page == Router.About && <About />}
                {page == Router.Skills && <Skills />}
            </div>
        </section>
    )
}

export default Board
