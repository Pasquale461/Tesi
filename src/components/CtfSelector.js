import React, { useRef, useEffect } from 'react';
import './../CtfStyle.css';
import DDOS from '../Ctf/RED/DDOS';
import PHISHING from '../Ctf/RED/PHISHING';
import DDOS_B from '../Ctf/BLUE/DDOS_B';
import { animateScroll as scroll } from 'react-scroll';
import FLOODING from '../Ctf/RED/FLOODING';
import SQLInjection from '../Ctf/RED/SQLInjection';
import SPOOFING from '../Ctf/RED/SPOOFING';
import FIRMWARE from '../Ctf/RED/FIRMWARE';
import CODEINJECTION from '../Ctf/RED/CODEINJECTION';


function CtfSelector(props) {
  const { name, level, team } = props;
  


  const componentMap = {
    red: {
      '1': {
        DDOS: <DDOS />,
        PHISHING: <div></div> 
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
          DDOS: <DDOS_B />,
          SQL_INJECTION : <div></div> 
        },
        '2': {
          DDOS: <span></span>,
          SQL_INJECTION : <div></div> 
        },
        '3': {
          DDOS: <span></span>,
          SQL_INJECTION : <div></div> 
        },
        '4': {
          DDOS: <span></span>,
          SQL_INJECTION : <div></div> 
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

  return (
    <div id='CTFcontain' className='center' >
      <div ref={ctfSelectorRef} tabIndex={-1}></div>
      
      {selectedComponent}
    </div>
  );
}

export default CtfSelector;