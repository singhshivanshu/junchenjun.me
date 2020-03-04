import React, { useState } from 'react'
import '../styles/index.scss'
import Menu from '../components/Menu/index'
import Board from '../components/Board/index'
import router from '../utilities/constants/router'
import AppHelmet from '../components/Helmet/index'

const App = () => {
    const [state, setState] = useState(router.About)

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
