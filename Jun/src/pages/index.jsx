import React, { useState } from 'react'
import Menu from './components/Menu'
import './style.scss'
import Board from './components/Board/index'
import Footer from './components/Footer/index'

const App = () => {
    const [state, setState] = useState('')

    return (
        <div className="container">
            <main className="content">
                <Menu setPage={setState} page={state} />
                <Board page={state} />
            </main>
            <Footer />
        </div>
    )
}

export default App
