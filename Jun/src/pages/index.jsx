import React, { useState } from 'react'
import Menu from './components/Menu'
import './styles/index.scss'
import Board from './components/Board/index'
import Router from '../../constants/Router'
import { Helmet } from 'react-helmet'

const App = () => {
    const [state, setState] = useState(Router.About)

    return (
        <div className="container">
            <Helmet>
                <title>Jun</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Covered+By+Your+Grace&display=swap"
                />
            </Helmet>
            <main className="content">
                <Menu setPage={setState} page={state} />
                <Board page={state} />
            </main>
        </div>
    )
}

export default App
