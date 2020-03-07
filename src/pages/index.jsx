import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../styles/index.scss'
import Menu from '../components/Menu/index'
import Board from '../components/Board/index'
import router from '../utilities/constants/router'
import AppHelmet from '../components/Helmet/index'
import Footer from '../components/Footer/index'

const App = props => {
    const [state, setState] = useState(router.About)
    const { theme } = props

    return (
        <div className={'app-root ' + theme}>
            <div className="container">
                <AppHelmet />
                <main className="content">
                    <Menu setPage={setState} page={state} />
                    <Board page={state} />
                </main>
                <Footer />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { theme: state.themeReducer.theme }
}

export default connect(mapStateToProps)(App)
