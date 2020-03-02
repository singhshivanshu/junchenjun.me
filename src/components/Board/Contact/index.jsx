import React from 'react'
import { Linkedin, Github } from '@icons-pack/react-simple-icons'
import Mail from '../mail.svg'

const Contact = () => {
    return (
        <div>
            <hr />
            <ul className="contact-section">
                <li className="contact-icon">
                    <Linkedin color="#ffffff" />
                </li>
                <li className="contact-icon">
                    <Github color="#ffffff" />
                </li>
                <li className="contact-icon">
                    <Mail />
                </li>
            </ul>
        </div>
    )
}

export default Contact
