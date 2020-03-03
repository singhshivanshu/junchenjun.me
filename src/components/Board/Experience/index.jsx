import React from 'react'
import Contact from '../Contact/index'
import RightCapital from '../../../assets/icons/RightCapital.svg'
import { Gatsby, ReactJs } from '@icons-pack/react-simple-icons'

const Experience = () => {
    return (
        <section className="experience">
            <h1 className="experience-type">WORK EXPERIENCE</h1>
            <h1 className="experience-title">
                <span>RightCapital Inc</span>
                <RightCapital />
            </h1>
            <span className="experience-position">
                Software Engineer Intern
            </span>
            <span className="experience-time">July 2018 ~ August 2019</span>

            <p>
                One year full-time working as a member of the front-end team,
                worked closely with React ecosystem, using TypeScript as the
                main programming language. Three projects I have been highly
                involved:
            </p>

            <ul>
                <li>
                    Web project: migrating{' '}
                    <a
                        href="https://www.rightcapital.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        companys public website
                    </a>{' '}
                    from Angular to React.
                </li>
                <li>
                    Mobile project: development of the RightCapital mobile app,
                    using React Native and Expo platform. Published on both{' '}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.rightcapital.mobileapp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Android
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://apps.apple.com/us/app/rightcapital/id1425772044"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        iOS{' '}
                    </a>
                    .
                </li>
                <li>
                    Web project: independently built{' '}
                    <a
                        href="https://blog.rightcapital.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        company’s new blog website
                    </a>{' '}
                    using CMS Ghost platform.
                </li>
            </ul>
            <hr />
            <h1 className="experience-type">OTHER PROJECTS</h1>
            <h1 className="experience-title">
                <span>React Native</span>
                <ReactJs color="#61DAFB" />
            </h1>
            <p>
                Independently developed an RSS feed reader app using React
                Native: <a>BAO</a>.
            </p>
            <div className="margin-top-block" />
            <h1 className="experience-title">
                <span>Gatsby</span>
                <Gatsby color="#663399" />
            </h1>
            <p>This very website built with Gatsby and hosted on Heroku~</p>
            <Contact />
        </section>
    )
}

export default Experience