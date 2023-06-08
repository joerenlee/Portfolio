import React, { useEffect, useRef } from 'react'
import CV from './CV';
import avatarImage from '../assets/avatar.jpeg';
import AOS from 'aos';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='header-section'>
            <div className='header'>
                <div className="header-image" data-aos="fade-down" data-aos-delay="500" data-aos-mirror='true'>
                    <img loading='lazy' src={avatarImage} alt="MyPic" />
                </div>
                <div className="header-description" data-aos="fade-right" data-aos-delay="700" data-aos-mirror='true'>
                    <span>Hi!, My name is</span>
                    <p>Joeren Lee</p>
                    <p>Full Stack Developer</p>
                    <CV />
                    <a href="https://github.com/joerenlee" target='_blank'><FaGithub size={30} style={{ marginRight: '20px' }}/></a>
                    <a href="https://www.linkedin.com/in/joeren-lee-7523371bb/" target='_blank'><FaLinkedin size={30} /></a>
                </div>
            </div>
        </section>
    )
}

export default Header;