import React from 'react';
import { Button } from '../button/Button';
import video2 from '../../assets/video-2.mp4';

import './HeroSection.styles.css'
import '../../App.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src={video2} autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
            >
                GET STARTED
            </Button>
            <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
            >
                WATCH TRAILER <i className='far fa-play-circle' /> 
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;