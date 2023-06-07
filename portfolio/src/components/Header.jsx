import React, { useEffect, useRef } from 'react'
import CV from './CV';
import avatarImage from '../assets/avatar.jpeg';
import AOS from 'aos';

const Header = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='header-section'>
            <div className='header'>
                <div className="header-image" data-aos="fade-down" data-aos-delay="100" data-aos-mirror='true'>
                    <img loading='lazy' src={avatarImage} alt="MyPic" />
                </div>
                <div className="header-description" data-aos="fade-right" data-aos-delay="300" data-aos-mirror='true'>
                    <span>Hi!, My name is</span>
                    <p>Joeren Lee</p>
                    <p>Full Stack Developer</p>
                    <CV />
                </div>
            </div>
        </section>
    )
}

export default Header;