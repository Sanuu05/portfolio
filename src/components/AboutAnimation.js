import React from 'react';
import Lottie from 'lottie-react';
import aboutData from '../animations/about-anim.json';

const AboutAnimation = () => (
  <div className="lottie-about-wrapper">
    <Lottie
      animationData={aboutData}
      loop={true}
      autoplay={true}
      style={{ width: '100%', height: '100%' }}
    />
  </div>
);

export default AboutAnimation;
