import React from 'react'
import Contact from '../Contact/index'
import WaveLine from '../../Commen/WaveLine/index'

const About = () => {
    return (
        <section className="about fade-in-from-left no-animation-on-mobile ">
            <h1 className="about-title-1">
                <span className="buzz" data-buzz="Hi,">
                    Hi,
                </span>{' '}
                👋
            </h1>
            <h1 className="about-title-2">I am Jun.</h1>
            <WaveLine />
            <ul>
                <li> I&apos;d like to call myself a web developer. </li>
                <li>
                    Currently a master student at uOttawa studying Computer
                    Science.
                </li>
                <li>A fast learner and always open to new poossibilities.</li>
                <li> Have a soft spot for nicely designed websites~</li>
            </ul>
            <Contact />
        </section>
    )
}

export default About
