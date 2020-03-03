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
                href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                rel="stylesheet"
            />
            <meta name="theme-color" content="#121620" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="#121620"
            />
        </Helmet>
    )
}

export default AppHelmet