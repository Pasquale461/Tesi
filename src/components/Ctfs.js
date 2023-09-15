
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from '../Dnd/Container';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './../Ctfs.css';


function Ctfs() {
  const [miaVariabile, setMiaVariabile] = useState(1);

  // Funzione per impostare il valore della variabile
  const impostaVariabile = (valore) => {
    if(valore==5)
    {
      setMiaVariabile(4);
    }
    else if(valore==0)
    {
      setMiaVariabile(1);
    }  
    
    else setMiaVariabile(valore); // Imposta il valore desiderato
  };

  return (

    <div>
      <Header></Header>
     
      <div id='ctf'>
      <div>
       <h2 className='titolo center'>Trascina i livelli</h2>
       <p className='testo center'>testo medio lungo</p>
      </div>
      <DndProvider backend={HTML5Backend}>
      
        {/* Passa il valore di miaVariabile come prop al componente Container */}
     
        <Container level={miaVariabile.toString()} />

        
      </DndProvider>
      </div>
      <div className='ciao'>
      <div id='arrows'>
        
        <div className='arrow sx'  onClick={() => impostaVariabile(miaVariabile-1)}>
        <span></span>
        <span></span>
        <span></span>
        </div>

        <div className='arrow dx'  onClick={() => impostaVariabile(miaVariabile+1)}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Ctfs;