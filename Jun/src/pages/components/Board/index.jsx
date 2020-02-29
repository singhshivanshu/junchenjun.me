import React from 'react'
import Router from '../../constants/Router'
import About from './About/index'
import Skills from './Skills/index'
import WelcomeSvg from './top.svg'
import './style.scss'

const Board = props => {
    const { page } = props

    return (
        <section className="board">
            <div className="board-content">
                {!page && <WelcomeSvg className="welcome-svg" />}
                {page == Router.About && <About />}
                {page == Router.Skills && <Skills />}
            </div>
        </section>
    )
}

export default Board
