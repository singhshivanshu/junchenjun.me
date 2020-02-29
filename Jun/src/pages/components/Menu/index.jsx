import React from 'react'
import { Router } from '../../constants'
import "./style.scss"

const Menu = () => (
    <nav>
        { Router.map((item) => 
            <div key={item.name} className="section">
                <div className="section-title">
                    <h1>
                       {item.name}
                    </h1>
                </div>
            </div>
            )}
    </nav>
)

export default Menu;