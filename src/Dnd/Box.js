import { useDrag } from 'react-dnd'
import React from 'react';
import { ItemTypes } from './ItemTypes.js'
const style = {
  
 
}
export const Box = function Box({ name, imgPath }) { // Aggiungi imgPath come parametro
   // Utilizza imgPath come argomento per require

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      // Funzione end
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;
  
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      <img src={imgPath} alt={name} />
      {/*<p id='element'>{name}</p>*/}
    </div>
  );
};
