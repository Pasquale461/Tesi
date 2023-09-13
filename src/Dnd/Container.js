import { memo } from 'react'
import { Box } from './Box.js'
import { Dustbin } from './Dustbin.js'
import Hacker from '../images/hacker.png'
export const Container = memo(function Container({level}) {
  
  switch (level) {
    case '1':
      return (

        <div id='griglia'>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin level='1'/>
          </div>
          <div id = 'elements'style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Sensore" imgPath={require('./../images/sensore.png')} />
          <Box name="Automobile" imgPath={require('./../images/auto.png')} />
          
          
          </div>
          
        </div>
      )
     
      case '2':
        return (
  
          <div id='griglia'>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Dustbin level='2'/>
            </div>
            <div id = 'elements'style={{ overflow: 'hidden', clear: 'both' }}>
            <Box name="Semaforo" imgPath={require('./../images/semaforo.png')} />
            <Box name="Automobile" imgPath={require('./../images/auto.png')} />
            
            </div>
          </div>
        )
      
        case '3':
      return (

        <div id='griglia'>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin level='3'/>
          </div>
          <div id = 'elements'style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Semaforo" imgPath={require('./../images/semaforo.png')} />
          <Box name="Sensore" imgPath={require('./../images/sensore.png')} />
          </div>
        </div>
      )
     
      case '4':
      return (

        <div id='griglia'>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin level='4'/>
          </div>
          <div id = 'elements'style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Sensore" imgPath={require('./../images/sensore.png')} />
          <Box name="Automobile" imgPath={require('./../images/auto.png')} />
          </div>
        </div>
      )
     
    default:
      return (

        <div id='griglia'>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin level='1'/>
          </div>
          <div id = 'elements'style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Semaforo" imgPath={require('./../images/semaforo.png')} />
          <Box name="Sensore" imgPath={require('./../images/sensore.png')} />
          </div>
        </div>
      )
  }
 
})
export default Container
