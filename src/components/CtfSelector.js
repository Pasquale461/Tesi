import React, { useRef, useEffect } from 'react';
import './../CtfStyle.css';
import { animateScroll as scroll } from 'react-scroll';
import AnimateWalking from '../components/Animation'
import { CODEINJECTION_B, FIRMWARE_B, FLOODING_B, DDOS_B, RAMSOWARE_B, SQLInjection_B, PHISHING_B, SPOOFING_B } from '../Ctf/BLUE';
import { CODEINJECTION, FIRMWARE, FLOODING, DDOS, RAMSOWARE, SQLInjection, PHISHING, SPOOFING } from '../Ctf/RED';

function CtfSelector(props) {
  const { name, level, team } = props;
  

  const componentMap = {
    red: {
      '1': {
        DDOS: <DDOS />,
        RAMSOWARE: <RAMSOWARE />
      },
      '2': {
        SPOOFING: <SPOOFING/>,
        'FIRMWARE ATTACK' : <FIRMWARE/> 
      },
      '3': {
        "DATA FLOODING": <FLOODING />,
        "CODE INJECTION" : <CODEINJECTION/> 
      },
      '4': {
        PHISHING: <PHISHING />,
        'SQL Injection' : <SQLInjection/>
      },
    },
      blue: {
        '1': {
          DDOS: <AnimateWalking type={<DDOS_B/>} imgPath={require('./../images/autobus.png')}/>,
          RAMSOWARE : <AnimateWalking type={<RAMSOWARE_B/>} imgPath={require('./../images/lampione.png')}/>,
        },
        '2': {
          SPOOFING: <AnimateWalking type={<SPOOFING_B/>} imgPath={require('./../images/wifi.png')}/>,
          'FIRMWARE ATTACK' : <AnimateWalking type={<FIRMWARE_B/>} imgPath={require('./../images/autovelox.png')}/>,
        },
        '3': {
          "DATA FLOODING": <AnimateWalking type={<FLOODING_B/>} imgPath={require('./../images/cloud.png')}/>,
          "CODE INJECTION" : <AnimateWalking type={<CODEINJECTION_B/>} imgPath={require('./../images/municipio.png')}/>, 
        },
        '4': {
          PHISHING: <AnimateWalking type={<PHISHING_B/>} imgPath={require('./../images/data.png')}/>,
          'SQL Injection' : <AnimateWalking type={<SQLInjection_B/>} imgPath={require('./../images/hospital.png')}/>,
        }
      
    },
   
  };

  const selectedComponent = componentMap[team]?.[level]?.[name];


const ctfSelectorRef = useRef(null);

  // Funzione per impostare il focus con animazione
  const setFocusWithAnimation = () => {
    if (ctfSelectorRef.current) {
      // Imposta il focus sull'elemento
      

      // Esegui un'animazione di scorrimento verso l'inizio dell'elemento
      scroll.scrollTo(ctfSelectorRef.current.offsetTop -90, {
        duration: 2000, // Durata dell'animazione in millisecondi (0,5 secondi)
        smooth: true, // Animazione fluida
      });
    }
  };

  // Effetto per impostare il focus con animazione quando "name" cambia
  useEffect(() => {
    setFocusWithAnimation();
  }, [name]);
  if(team==='red')
  return (
    <div id='CTFcontainRed' className='center' >
      <div ref={ctfSelectorRef} tabIndex={-1}></div>
      
      {selectedComponent}
    </div>
  );
  else
  return (
    <div id='CTFcontainBlue' className='center' >
      <div ref={ctfSelectorRef} tabIndex={-1}></div>
      
      {selectedComponent}
    </div>
  );

}

export default CtfSelector;