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
import VsCode from '../../../assets/icons/VsCode.svg'
import Webpack from '../../../assets/icons/Webpack.svg'
import MacOS from '../../../assets/icons/MacOS.svg'
import Contact from '../Contact/index'
import { useSpring, animated } from 'react-spring'
import fadeInFromLeft from '../../../utilities/animations/fadeInFromLeft'
import WaveLine from '../../Commen/WaveLine/index'
import ToolTip from '../../Commen/ToolTip/index'

const Skills = () => {
    let animatedProps
    if (typeof window !== `undefined`) {
        const { innerWidth: width } = window
        animatedProps = width > 500 ? useSpring(fadeInFromLeft) : null
    }

    return (
        <animated.section style={animatedProps} className="skills">
            <h1>Web development</h1>

            <ToolTip lable="JavaScript">
                <Javascript color="#F0DB4F" />
            </ToolTip>

            <ToolTip lable="HTML">
                <Html5 color="#E34F26" size={23} />
            </ToolTip>
            <ToolTip lable="CSS">
                <Css3 color="#1572B6" />
            </ToolTip>
            <ToolTip lable="React">
                <ReactJs color="#61DAFB" />
            </ToolTip>
            <ToolTip lable="Redux">
                <Redux color="#764ABC" />
            </ToolTip>
            <ToolTip lable="Sass">
                <Sass color="#CC6699" />
            </ToolTip>
            <ToolTip lable="Jest">
                <Jest color="#C21325" />
            </ToolTip>
            <ToolTip lable="Webpack">
                <Webpack className="webpack-icon" />
            </ToolTip>
            <ToolTip lable="Gatsby">
                <Gatsby color="#663399" />
            </ToolTip>
            <p>
                More than one year of working experience in React, Redux and
                many other more frontend frameworks. Worked closely with the
                React ecosystem.
            </p>
            <WaveLine />
            <h1>Mobile development</h1>
            <ToolTip lable="React Native">
                <ReactJs color="#61DAFB" />
            </ToolTip>
            <ToolTip lable="Expo">
                <Expo className="expo-icon" />
            </ToolTip>
            <ToolTip lable="iOS">
                <Ios className="ios-icon" />
            </ToolTip>
            <ToolTip lable="Android">
                <Android color="#3DDC84" />
            </ToolTip>
            <p>
                More than one year of working experience in React Native on the
                Expo platform. Participated in a mobile project in all stages of
                its life cycle, both iOS and Android.
            </p>
            <WaveLine />
            <h1>What else I love</h1>
            <ToolTip lable="Git">
                <Git color="#F05032" />
            </ToolTip>
            <ToolTip lable="Github">
                <Github className="github-icon" />
            </ToolTip>
            <ToolTip lable="VsCode">
                <VsCode className="vscode-icon" />
            </ToolTip>
            <ToolTip lable="MacOS">
                <MacOS className="macos-icon" />
            </ToolTip>
            <p>Love the open source community.</p>
            <p>Love being creative.</p>
            <Contact />
        </animated.section>
    )
}

export default Skills
