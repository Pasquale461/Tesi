import { useDrag } from 'react-dnd'
import React from 'react';
import { ItemTypes } from './ItemTypes.js'
import './../Ctfs.css';
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
  
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`} className='card'>
      <img src={imgPath} name={name} alt={name} className='attack'/>
      {/*<p id='element'>{name}</p>*/}
    </div>
  );
};
