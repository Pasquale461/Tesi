import React from 'react';
import Lottie from 'lottie-react';
import animationWalk from '../Animations/walking.json';
import animationCity from '../Animations/city.json';

function AnimateWalking() {
  const style = {
    height: 50,
    whith: 50,
  };
  const styleC = {
    height: 900,
    whith: 350,
  };

  return (
    <div>
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
