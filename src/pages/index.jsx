import React, { useState } from 'react'
import '../styles/index.scss'
import { Helmet } from 'react-helmet'
import Router from '../constants/Router'
import Menu from '../components/Menu/index'
import Board from '../components/Board/index'

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
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <meta name="theme-color" content="#0a1429" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="#0a1429"
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
