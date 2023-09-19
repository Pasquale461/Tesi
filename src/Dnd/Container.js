import { memo } from 'react'
import { Box } from './Box.js'
import { Dustbin } from './Dustbin.js'
import React, { useRef , useEffect , useState } from 'react';
import Hacker from '../images/hacker.png'
import './../Ctfs.css';
export const Container = memo(function Container({ level, onNameAfterDrop }) {
  
  const destroy = useRef(null);

  const [key, setKey] = useState(null);

  useEffect(() => {
    // Verifica se l'elemento esiste
    if (destroy.current) {
      // Rimuovi l'elemento dal DOM
      
    }

    // Genera una nuova chiave per il riferimento per forzare il suo ri-rendering
    setKey((prevKey) => prevKey + 1);
  }, [level]);

  switch (level) {
    case 1:
      return (

        <div id='flex'>
          
            <Dustbin level='1' onNameAfterDrop={onNameAfterDrop}/>
          
          <div id = 'elements'>
          <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} />
          <Box name="DDOS" imgPath={require('./../images/ddos.png')} className='attack' />
          <Box name="PHISHING" imgPath={require('./../images/botnet.png')} className='attack' />
         
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
     
      case 4:
      return (

        <div id='flex'>
          <div style={{ clear: 'both' }}>
            <Dustbin level='4'/>
          </div >
          <div id = 'elements'>
          <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} />
          <Box name="DDOS" imgPath={require('./../images/ddos.png')} className='attack' />
          <Box name="Botnet" imgPath={require('./../images/botnet.png')} className='attack' />

          
          
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
          
          
          
      );

      
  }
 
})
export default Container
