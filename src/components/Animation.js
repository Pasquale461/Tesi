import React from 'react';
import Lottie from 'lottie-react';
import animationWalk from '../Animations/walking.json';
import animationCity from '../Animations/city.json';
import { motion } from 'framer-motion'
import Backdrop from '@mui/material/Backdrop';
import './../Ctfs.css';


function AnimateWalking(props) {
  const { type , imgPath } = props; 
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
    zIndex: '1',
    display: 'flex',
  };
  const styl = {
    height: '30%',
    width: '30%',
    position: 'absolute',
    left: '100%',
    top: '60%',
    zIndex: '3',
  };
  const styleI = {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  };
  const cont = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: '0',
  }
  const anim = {
    position: 'relative',
    borderRadius: '50px',
    overflow: 'hidden',
    width: '75%',
    maxHeight: '700px',
    height: '100%',
  }
  if(window.innerWidth>1600){
    styl.top='40%'
    styleC.marginTop="-35%";
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
      <motion.div style={styl} animate={{ x: '-110%'}} onClick={handleOpen}>
        {/** immagine o gif in base all'attacco */}
        <img src={imgPath} style={styleI} className='zoom'/>
      </motion.div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div onClick={handleClose}
        style={cont}>

        </div>
        {type}
      </Backdrop>

    </div>
  );
}


export default AnimateWalking;
