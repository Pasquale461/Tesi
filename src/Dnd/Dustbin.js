import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import './../App.css';
import './../Ctfs.css';
export const Dustbin = function Dustbin({ level, onNameAfterDrop }) {
  {console.log(level)}
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item) => {
      onNameAfterDrop(item.name);
      {console.log(item.name)}
      return { name: 'Smart City' };},
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  switch (level)
  {
    case 1:
      return (
        <div id='levels'>
          <h1>Infrastruttura e reti</h1>
          <h4>fornisce le basi per la trasformazione in una città intelligente, consentendo la raccolta e la gestione dei dati.</h4>
        <img src={require('../images/livello1.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide'>{isActive ? 'Release to drop' : 'Drag item in layer'}</h1>
        </div>
        
      )
      case 2:
      return (
        <div id='levels'>
          <h1>Sensoristica</h1>
          <h3>I sensori IoT giocano un ruolo cruciale nella raccolta di dati dettagliati che alimentano l'intelligenza della città.</h3>
        <img src={require('../images/livello2.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide'>{isActive ? 'Release to drop' : 'Drag item in layer'}</h1>        </div>
        
      )
      case 3:
      return (
        <div id='levels'>
          <h1>Service delivery platform</h1>
          <h3> svolge un ruolo cruciale nell'ottimizzazione dei servizi in una città intelligente attraverso l'analisi dei dati territoriali.</h3>
        <img src={require('../images/livello3.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide'>{isActive ? 'Release to drop' : 'Drag item in layer'}</h1>        </div>
        
      )
      case 4:
      return (
        <div id='levels'>
          <h1>Applicazioni e servizi</h1>
          <h3>Sono ciò che i cittadini utilizzano quotidianamente per accedere ai servizi e alle informazioni offerti dalla città intelligente.</h3>
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

