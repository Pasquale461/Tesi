import React from 'react';
import Lottie from 'lottie-react';
import animationWalk from '../Animations/walking.json';
import animationCity from '../Animations/city.json';
import animationSem from '../Animations/semaforo.json';
import { motion } from 'framer-motion'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function AnimateWalking(modulo) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const style = {
    height: '30%',
    width: '30%',
    position: 'absolute',
    left: '20%',
    top: '60%',
    zIndex: 2,
  };
  const styleC = {
    width: '100%',
    zIndex: 1,
    display: 'flex',
  };
  const styl = {
    height: '40%',
    width: '40%',
    position: 'absolute',
    left: '100%',
    top: '30%',
    zIndex: 3,
  };
  const styleS = {
    height: '100%',
    width: '100%',
  };
  const anim = {
      position: 'relative',
      borderRadius: '50px',
      overflow: 'hidden',
      width: '75%',
      maxHeight: '700px',
  }
  return (
    <div style={anim}>
      <Lottie
        animationData={animationWalk}
        style={style}
      />
      <Lottie
        animationData={animationCity}
        style={styleC}
      />
      <motion.div style={styl} animate={{ x: '-80%' }} onClick={handleOpen}>
        <Lottie
          animationData={animationSem}
          style={styleS}
        />
      </motion.div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {modulo.type}
      </Backdrop>

    </div>
  );
}


export default AnimateWalking;
