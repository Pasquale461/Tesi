import React from 'react';
import Lottie from 'lottie-react';
import animationWalk from '../Animations/walking.json';
import animationCity from '../Animations/city.json';

function AnimateWalking() {
  const style = {
    height: 220,
    whith: 220,
    position: 'absolute',
    left: '20%',
    top: '45%',
    zIndex: 2,
  };
  const styleC = {
    height: '100%',
    whith: 350,
    zIndex: 1,
    display: 'flex',
  };

  return (
    <div id='anim'>
      <Lottie
        animationData={animationWalk}
        style={style}
      />
      <Lottie
        animationData={animationCity}
        style={styleC}
      />
    </div>
  );
}


export default AnimateWalking;
