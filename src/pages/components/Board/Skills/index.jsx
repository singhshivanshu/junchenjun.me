import React from 'react'
import {
    Html5,
    Css3,
    Gatsby,
    Git,
    ReactJs,
    Javascript,
    Redux,
    Ios,
    Android,
    Expo,
    Github,
    Sass,
    Jest,
} from '@icons-pack/react-simple-icons'
import VsCode from '../VsCode.svg'
import Webpack from '../Webpack.svg'
import Contact from '../Contact/index'

const Skills = () => {
    return (
        <div>
            <h1>Web development</h1>
            <Javascript color="#F7DF1E" />
            <Html5 color="#E34F26" size={23} />
            <Css3 color="#1572B6" />
            <ReactJs color="#61DAFB" />
            <Redux color="#764ABC" />
            <Sass color="#CC6699" />
            <Jest color="#C21325" />
            <Webpack />
            <Gatsby color="#663399" />
            <p>
                More than one year of working experience in React, Redux and
                many other more frontend frameworks. Worked closely with the
                React ecosystem.
            </p>
            <hr />
            <h1>Mobile development</h1>
            <ReactJs color="#61DAFB" />
            <Expo color="#ffffff" />
            <Ios color="#ffffff" />
            <Android color="#3DDC84" />
            <p>
                More than one year of working experience in React Native on the
                Expo platform. Participated in a mobile project in all stages of
                its life cycle, both iOS and Android.
            </p>
            <hr />
            <h1>What else I love</h1>
            <Git color="#F05032" />
            <Github color="#ffffff" />
            <VsCode />
            <p>Love the open source community.</p>
            <p>Love being creative.</p>
            <Contact />
        </div>
    )
}

export default Skills
