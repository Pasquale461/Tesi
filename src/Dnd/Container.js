import { memo } from 'react'
import { Box } from './Box.js'
import { Dustbin } from './Dustbin.js'
import Hacker from '../images/hacker.png'
import './../Ctfs.css';
export const Container = memo(function Container({ level, name, onNameAfterDrop }) {
  
  switch (level) {
    case '1':
      return (

        <div id='flex'>
          <div style={{ clear: 'both' }}>
            <Dustbin level='1' onNameAfterDrop={onNameAfterDrop}/>
          </div >
          <div id = 'elements'>
          <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} />
          <Box name="DDOS" imgPath={require('./../images/ddos.png')} className='attack' />
          <Box name="Botnet" imgPath={require('./../images/botnet.png')} className='attack' />
          
          
          </div>
          </div>
          
        
      )
     
      case '2':
        return (
          <div id='flex'>
          <div style={{ clear: 'both' }}>
            <Dustbin level='2'/>
          </div >
          <div id = 'elements'>
          <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} />
          <Box name="DDOS" imgPath={require('./../images/ddos.png')} className='attack' />
          <Box name="Xss" imgPath={require('./../images/xss.png')} className='attack' />
          
          
          </div>
          </div>
        )
      
        case '3':
      return (

        <div id='flex'>
        <div style={{ clear: 'both' }}>
          <Dustbin level='3'/>
        </div >
        <div id = 'elements'>
        <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} />
        <Box name="DDOS" imgPath={require('./../images/ddos.png')} className='attack' />
        <Box name="Phishing" imgPath={require('./../images/phishing.png')} className='attack' />
        
        
        </div>
        </div>
      )
     
      case '4':
      return (

        <div id='flex'>
          <div style={{ clear: 'both' }}>
            <Dustbin level='4'/>
          </div >
          <div id = 'elements'>
          <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} />
          <Box name="DDOS" imgPath={require('./../images/ddos.png')} className='attack' />
          <Box name="Botnet" imgPath={require('./../images/phishing.png')} className='attack' />

          
          
          </div>
          </div>
      )
     
    default:
      return (

        <div id='flex'>
          <div style={{ clear: 'both' }}>
            <Dustbin level='5'/>
          </div >
          <div id = 'elements'>
          <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} />
          <Box name="DDOS" imgPath={require('./../images/ddos.png')} className='attack' />
          <Box name="Xss" imgPath={require('./../images/xss.png')} className='attack' />
          
          
          </div>
          </div>
      )
  }
 
})
export default Container
