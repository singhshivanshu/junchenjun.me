import React from 'react'
import { Helmet } from 'react-helmet'

const AppHelmet = () => {
    return (
        <Helmet>
            <title>Jun Chen</title>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Covered+By+Your+Grace&display=swap"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
                rel="stylesheet"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
        </Helmet>
    )
}

export default AppHelmet
