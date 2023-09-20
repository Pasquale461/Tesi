import { memo } from 'react'
import { Box } from './Box.js'
import { Dustbin } from './Dustbin.js'

import React, { useRef , useEffect , useState } from 'react';
import Hacker from '../images/hacker.png'
import './../Ctfs.css';
export const Container = memo(function Container({ level, name, onNameAfterDrop }) {
  

 
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
          <div style={{ clear: 'both' }}>
            <Dustbin level={1} onNameAfterDrop={onNameAfterDrop}/>
          </div >
          <div id = 'elements' ref={destroy} key={key} >
   
               <Box name="DDOS" imgPath={require('./../images/ddos.png')} className='attack' />
                    
   
          <Box name="Botnet" imgPath={require('./../images/botnet.png')} className='attack' />
         
          </div>
          </div>
          
        
      )
     
      case 2:
        return (
          <div id='flex'>
          <div style={{ clear: 'both' }}>
            <Dustbin level={2} onNameAfterDrop={onNameAfterDrop}/>
          </div >
          <div id = 'elements' ref={destroy} key={key}>
          <Box name="SPOOFING"  imgPath={require('./../images/spoofing.png')} className='attack'/>
          <Box name="FIRMWARE ATTACK" imgPath={require('./../images/firmware.png')} className='attack' />
  
          </div>
          </div>
        )
      
        case 3:
      return (

        <div id='flex'>
        <div style={{ clear: 'both' }}>
          <Dustbin level={3} onNameAfterDrop={onNameAfterDrop}/>
        </div >
        <div id = 'elements' ref={destroy} key={key}>
        <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} className='attack'/>
        <Box name="DATA FLOODING" imgPath={require('./../images/flooding.png')} className='attack' />
     
        </div>
        </div>
      )
     
      case 4:
      return (

        <div id='flex'>
          <div style={{ clear: 'both' }}>
            <Dustbin level={4} onNameAfterDrop={onNameAfterDrop}/>
          </div >
          <div id = 'elements' ref={destroy} key={key}>
          <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} className='attack'/>
          <Box name="PHISHING" imgPath={require('./../images/phishing.png')} className='attack' />
         
          </div>
          </div>
      )
     
    default:
      return (

        <div id='flex'>
          <div style={{ clear: 'both' }}>
            <Dustbin level={5} onNameAfterDrop={onNameAfterDrop}/>
          </div >
          <div id = 'elements' ref={destroy} key={key}>
          <Box name="SQL Injection"  imgPath={require('./../images/sqlinj.png')} />
          <Box name="DDOS" imgPath={require('./../images/ddos.png')} className='attack' />
          <Box name="Xss" imgPath={require('./../images/xss.png')} className='attack' />
          
          
          </div>
          </div>
      )
  }
 
})
export default Container
