import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/Menu/index'
import Board from '../components/Board/index'
import router from '../utilities/constants/router'
import AppHelmet from '../components/Helmet/index'
import Footer from '../components/Footer/index'
import '../styles/index.scss'

const App = () => {
    const [state, setState] = useState(router.About)
    const theme = useSelector(state => state.themeReducer.theme)

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

export default App
