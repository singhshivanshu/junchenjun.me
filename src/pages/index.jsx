import React, { useState } from 'react'
import '../styles/index.scss'
import Router from '../utilities/constants/Router'
import Menu from '../components/Menu/index'
import Board from '../components/Board/index'
import AppHelmet from '../utilities/Helmet/index'

const App = () => {
    const [state, setState] = useState(Router.About)

    return (
        <div className="container">
            <AppHelmet />
            <main className="content">
                <Menu setPage={setState} page={state} />
                <Board page={state} />
            </main>
        </div>
    )
}

export default App
