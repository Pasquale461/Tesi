
import React, { useState } from 'react';
import './../Cards.css';


function Cards(props) {
    // Accedi a miaVariabile e impostaVariabile tramite props
    const { miaVariabile, impostaVariabile } = props;
  
    // Funzione per impostare il valore della variabile nel componente Cards
    const handleClick = (valore) => {
      if (valore === 5) {
        impostaVariabile(4); // Chiama la funzione per aggiornare il valore nel componente Ctfs
      } else if (valore === 0) {
        impostaVariabile(1); // Chiama la funzione per aggiornare il valore nel componente Ctfs
      } else {
        impostaVariabile(valore); // Chiama la funzione per aggiornare il valore nel componente Ctfs
      }
    };
return(
<div class="tariffCards">
<div class="economy" onClick={() => handleClick(4)}>
<img src={require('./../images/citylevel.jpg')} className='fitted'></img>        <h3>Quarto Livello</h3>
  <span>APPLICAZIONI E SERVIZI</span>
</div>
<div class="premiumeconomy" onClick={() => handleClick(3)}>
<img src={require('./../images/transport.jpg')} className='fitted'></img>        <h3>Terzo Livello</h3>
  <span>SERVICE DELIVERY PLATFORM</span>
</div>
<div class="business" onClick={() => handleClick(2)}>
<img src={require('./../images/sensorlevel.jpg')} className='fitted'></img>      <h3>Secondo Livello</h3>
  <span>SENSORISTICA</span>
</div>
<div class="first" onClick={() => handleClick(1)}>
<img src={require('./../images/network.jpg')} className='fitted'></img>     <h3>Primo Livello</h3>
  <span>INFRASTUTTURA E RETI</span>
</div>
</div>
  );
}

export default Cards;