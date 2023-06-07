import React, { useEffect, useRef } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.scss';

const App = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out'
          });
        AOS.refresh();
    }, []);

    useEffect(() => {
        let isScrolling = false;

        const handleScroll = (event) => {
            if (isScrolling || event.ctrlKey) return;

            event.preventDefault();
            isScrolling = true;

            const scrollAmount = event.deltaY > 0 ? window.innerHeight : -window.innerHeight;
            const targetScroll = window.pageYOffset + scrollAmount;
            const scrollDuration = 500;
            const increment = 10;

            scrollToTarget(targetScroll, scrollDuration, increment, () => {
                isScrolling = false;
            });
        };

        const scrollToTarget = (target, duration, increment, callback) => {
            const start = window.pageYOffset;
            const change = target - start;
            let currentTime = 0;

            const animateScroll = () => {
                currentTime += increment;
                const newPosition = easeInOutQuad(currentTime, start, change, duration);
                window.scrollTo(0, newPosition);
                if (currentTime < duration) {
                    setTimeout(animateScroll, increment);
                } else {
                    callback();
                }
            };

            animateScroll();
        };

        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => window.removeEventListener('wheel', handleScroll);
    }, []);


    return (

        <>
            <Header />
            <About />
            <Contact />
            <Experience />
            <Projects />
            <Footer />
        </>
    )
}

export default App;