import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import './../App.css';
import './../Ctfs.css';
export const Dustbin = function Dustbin({level}) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Smart City' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  switch (level)
  {
    case '1':
      return (
        <div id='levels'>
          <h1>Livello</h1>
          <h3>aaaaa</h3>
        <img src={require('../images/livello1.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide'>{isActive ? 'Release to drop' : 'Drag item in layer'}</h1>
        </div>
        
      )
      case '2':
      return (
        <div id='levels'>
          <h1>Livello</h1>
          <h3>aaaaa</h3>
        <img src={require('../images/livello2.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide'>{isActive ? 'Release to drop' : 'Drag item in layer'}</h1>        </div>
        
      )
      case '3':
      return (
        <div id='levels'>
          <h1>Livello</h1>
          <h3>aaaaa</h3>
        <img src={require('../images/livello3.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide'>{isActive ? 'Release to drop' : 'Drag item in layer'}</h1>        </div>
        
      )
      case '4':
      return (
        <div id='levels'>
          <h1>Livello</h1>
          <h3>aaaaa</h3>
        <img src={require('../images/livello4.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide'>{isActive ? 'Release to drop' : 'Drag item in layer'}</h1>        </div>
        
      )
      default :
      return (
        <div id='levels'>
          <h1>Livello</h1>
          <h3>aaaaa</h3>
        <img src={require('../images/livello1.png')} id='imagelayers' ref={drop} data-testid="dustbin"/>
        <h1 className='texthide'>{isActive ? 'Release to drop' : 'Drag item in layer'}</h1>
        </div>
        
      )
      
  }
  
   
  }

