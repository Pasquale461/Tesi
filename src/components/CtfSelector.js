import React, { useRef, useEffect } from 'react';
import './../CtfStyle.css';
import DDOS from '../Ctf/RED/DDOS';
import PHISHING from '../Ctf/RED/PHISHING';
import { animateScroll as scroll } from 'react-scroll';
import SQLInjection from '../Ctf/RED/SQLInjection';


function CtfSelector(props) {
  const { name, level, team } = props;
  


  const componentMap = {
    red: {
      '1': {
        DDOS: <DDOS />,
        PHISHING: <div></div> 
      },
      '2': {
        DDOS: <DDOS />,
        SQL_INJECTION : <div></div> 
      },
      '3': {
        DDOS: <DDOS />,
        SQL_INJECTION : <div></div> 
      },
      '4': {
        PHISHING: <PHISHING />,
        'SQL Injection' : <SQLInjection/>
      },
    },
      blue: {
        '1': {
          DDOS: <DDOS />,
          SQL_INJECTION : <div></div> 
        },
        '2': {
          DDOS: <DDOS />,
          SQL_INJECTION : <div></div> 
        },
        '3': {
          DDOS: <DDOS />,
          SQL_INJECTION : <div></div> 
        },
        '4': {
          DDOS: <DDOS />,
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