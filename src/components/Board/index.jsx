import React from 'react'
import About from './About/index'
import Skills from './Skills/index'
import Experience from './Experience/index'
import router from '../../utilities/constants/router'
import FadeInFromLeft from '../Commen/FadeInFromLeft/index'

const Board = props => {
    const { page } = props

    return (
        <section className={'board'} id="board">
            <div className="board-content">
                {page == router.About && (
                    <FadeInFromLeft diableOnMobile={true}>
                        <About />
                    </FadeInFromLeft>
                )}
                {page == router.Skills && (
                    <FadeInFromLeft diableOnMobile={true}>
                        <Skills />
                    </FadeInFromLeft>
                )}
                {page == router.Experience && (
                    <FadeInFromLeft diableOnMobile={true}>
                        <Experience />
                    </FadeInFromLeft>
                )}
            </div>
        </section>
    )
}

export default Board
