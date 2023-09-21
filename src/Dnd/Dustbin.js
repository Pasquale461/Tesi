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
          <h1  className='center'>Infrastruttura e reti</h1>
          <h3  className='center'>fornisce le basi per la trasformazione in una città intelligente, consentendo la raccolta e la gestione dei dati nelle infrastrutture opportune.</h3>
        <img src={require('../images/livello1.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide center'>{isActive ? 'Rilascia per attaccare' : 'Trascina l\'attacco qui'}</h1>        </div>
        
      )
      case 2:
      return (
        <div id='levels'>
          <h1  className='center'>Sensoristica</h1>
          <h3  className='center'>I sensori IoT giocano un ruolo cruciale nella raccolta di dati dettagliati che alimentano l'intelligenza della città in modo efficace.</h3>
        <img src={require('../images/livello2.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide center'>{isActive ? 'Rilascia per attaccare' : 'Trascina l\'attacco qui'}</h1>        
           </div>
        
      )
      case 3:
      return (
        <div id='levels'>
          <h1 className='center'>Service delivery platform</h1>
          <h3 className='center'> svolge un ruolo cruciale nell'ottimizzazione dei servizi in una città intelligente attraverso l'analisi dei dati territoriali.</h3>
        <img src={require('../images/livello3.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide center'>{isActive ? 'Rilascia per attaccare' : 'Trascina l\'attacco qui'}</h1>        
              </div>
        
      )
      case 4:
      return (
        <div id='levels'>
          <h1  className='center'>Applicazioni e servizi</h1>
          <h3  className='center'>Sono ciò che i cittadini utilizzano quotidianamente per accedere ai servizi e alle informazioni offerti dalla città intelligente.</h3>
        <img src={require('../images/livello4.png')} id='imagelayers' ref={drop} data-testid="dustbin" className='image center'/>
        <h1 className='texthide center'>{isActive ? 'Rilascia per attaccare' : 'Trascina l\'attacco qui'}</h1>               </div>
        
      )
      default :
      return (
        <div id='levels'>
          <h1  className='center'>Livello</h1>
          <h3  className='center'>aaaaa</h3>
        <img src={require('../images/livello1.png')} id='imagelayers' ref={drop} data-testid="dustbin"/>
        <h1 className='texthide center'>{isActive ? 'Rilascia per attaccare' : 'Trascina l\'attacco qui'}</h1>
        </div>
        
      )
      
  }
  
   
  }

