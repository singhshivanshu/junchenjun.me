import React from 'react'
import { Link } from 'gatsby'
import { Router } from '../../constants'

const Menu = () => {
    return Router.map((item) => 
        <Link key={item.name} to={item.name} activeStyle={{ color: 'red' }} partiallyActive>
            {item.name}
        </Link>
      )
}

export default Menu;