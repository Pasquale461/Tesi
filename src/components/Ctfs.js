import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from '../Dnd/Container';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './../Ctfs.css';
import './../Cards.css';
import Cards from './Cards';
import CtfSelector from './CtfSelector';

function Ctfs() {
  const [miaVariabile, setMiaVariabile] = useState(1);
  const [nameAfterDrop, setNameAfterDrop] = useState(null);
  const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(true);

  const toggleCheckbox = () => {
    setIsCheckboxEnabled(!isCheckboxEnabled);
  };

  // Funzione per impostare il valore della variabile
  const impostaVariabile = (valore) => {
    if (valore === 5) {
      setMiaVariabile(4);
    } else if (valore === 0) {
      setMiaVariabile(1);
    } else {
      setMiaVariabile(valore);
    }
  };
  // Funzione per impostare il nome dopo il drag and drop
  const handleNameAfterDrop = (name) => {

    setNameAfterDrop(name);
  };




  return (
    <div>
      <Header></Header>
      <div id='introduzione'>
        <h2 className='titolo center words' style={{ fontSize: '45px' }}>Benvenuti nel nostro Configuratore CTF per la Smart City!</h2><br></br>

        <p className='testo center words' style={{ fontSize: '25px' }}>
          Viaggiate in una Smart City virtuale e mettete alla prova le vostre abilità di <br></br>
          sicurezza informatica come mai prima d'ora. Il nostro configuratore CTF offre<br></br>
          ben 45 livelli di sfide che richiedono la vostra astuzia, creatività e abilità<br></br>
          per completare con successo.
          <br></br>
          Prima di tutto seleziona il team Brue o Red
          <br></br>Seleziona il livello della smartcity da hackerare e trascina l'attacco nel livello per effettuarlo
          <br></br>Una volta fatto segui i passaggi della cyber killchain
          <br></br>Divertiti a giocare con le nostre CTF!
        </p>
      </div>
      <div id='ctf'>

        <div>
          <br></br>
          <label class="switch-button" for="switch">
            <p id='blue'>BLUE</p>
            <div class="switch-outer">
              <input id="switch" type="checkbox" checked={isCheckboxEnabled}
                onChange={toggleCheckbox}></input>
              <div class="button">
                <span class="button-toggle"></span>
                <span class="button-indicator"></span>
              </div>
            </div>
            <p id='red'>RED</p>
          </label>
        </div>

        {/* Passa miaVariabile e impostaVariabile come props al componente Cards */}




        <div id='griglia' className='container'>
          <DndProvider backend={HTML5Backend}>
            <Cards miaVariabile={miaVariabile} impostaVariabile={impostaVariabile} />
            <Container level={miaVariabile} onNameAfterDrop={handleNameAfterDrop} />

          </DndProvider>
        </div>


      </div>
      <div className='freccie'>
        <div id='arrows'>
          <div className='arrow sx' onClick={() => impostaVariabile(miaVariabile - 1)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='arrow dx' onClick={() => impostaVariabile(miaVariabile + 1)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {nameAfterDrop && (

        <CtfSelector name={nameAfterDrop} level={miaVariabile} team={isCheckboxEnabled ? 'red' : 'blue'} />


      )}
      <Footer></Footer>
    </div>
  );
}

export default Ctfs;
