import { useDrag } from 'react-dnd'
import React from 'react';
import { ItemTypes } from './ItemTypes.js'
import './../Ctfs.css';
import Popover from '@mui/material/Popover';
const style = {
  
 
}








export const Box = function Box({ name, imgPath , nameAfterDrop  }) { // Aggiungi imgPath come parametro
   // Utilizza imgPath come argomento per require

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        console.log(name)
        //
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.1 : 1;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
  
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`} className='card' onMouseEnter={handlePopoverOpen}
    onMouseLeave={handlePopoverClose}>
      <img src={imgPath} name={name} alt={name} className='attack'/>
      <Popover
                      sx={{
                        pointerEvents: 'none',
                      }}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      <p className='popup' sx={{ p: 1 }}>{name}</p>
                    </Popover>
      {/*<p id='element'>{name}</p>*/}
    </div>
  );
};
