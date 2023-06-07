import React from 'react'
import resumePdf from '../assets/RESUME.pdf';

const CV = () => {
  return (
    <div className="cv">
        <a href={resumePdf} download className='btn'>Download CV</a>
        <a href="#contact" className='btn'>Contact me</a>
    </div>
  )
}

export default CV