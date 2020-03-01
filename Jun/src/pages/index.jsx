import React, { useState } from 'react'
import Menu from './components/Menu'
import './styles/index.scss'
import Board from './components/Board/index'
import Router from '../../constants/Router'

const App = () => {
    const [state, setState] = useState(Router.About)

    return (
        <div className="container">
            <main className="content">
                <Menu setPage={setState} page={state} />
                <Board page={state} />
            </main>
        </div>
    )
}

export default App
