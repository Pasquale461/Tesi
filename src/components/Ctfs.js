
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from '../Dnd/Container';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


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
      <h1>Titolo 1</h1>
      <div id='ctf'>
      <DndProvider backend={HTML5Backend}>
      
        {/* Passa il valore di miaVariabile come prop al componente Container */}
        <div id='arrows'>
        <button  onClick={() => impostaVariabile(miaVariabile-1)} className='arrow'>
        <img src={require('../images/leftarrow.png')} width="90" className='arrow' height="90" alt="submit" />
        </button>

        <button  onClick={() => impostaVariabile(miaVariabile+1)} className='arrow'>
        <img src={require('../images/rightarrow.png')} width="90" className='arrow' height="90" alt="submit" />
        </button>
          
        </div>
        <Container level={miaVariabile.toString()} />

       
      </DndProvider>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Ctfs;