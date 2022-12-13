import React from 'react';
import './style.css';
import { Link } from 'react-scroll';

function Arrow() {
  return (
    <div className='d-flex justify-content-center'>
      <Link to="characters-container" spy={true} smooth={true} offset={-20} duration={500}>
      <p className='arrow down'></p>
      </Link>
    </div>
  )
}

export default Arrow