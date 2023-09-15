
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
<div class="economy" onClick={() => handleClick(1)}>
<img src='https://www.keplerotech.com/keplero-2020/wp-content/uploads/2022/04/smartcity-by-keplero.jpg' className='fitted'></img>        <h3>Primo Livello</h3>
  <span>Full Insurance</span>
</div>
<div class="premiumeconomy" onClick={() => handleClick(2)}>
<img src='https://news.mit.edu/sites/default/files/images/202110/MIT-Wise-Systems-01.jpg' className='fitted'></img>        <h3>Secondo Livello</h3>
  <span>Full Insurance</span>
</div>
<div class="business" onClick={() => handleClick(3)}>
<img src='https://w0.peakpx.com/wallpaper/211/446/HD-wallpaper-automotive-electronics-test-automotive-sensors-test-automotive-lidar-sensors-test-car-technology.jpg' className='fitted'></img>      <h3>Terzo Livello</h3>
  <span>Full Insurance</span>
</div>
<div class="first" onClick={() => handleClick(4)}>
<img src='https://wallpapercave.com/wp/wp9501501.jpg' className='fitted'></img>     <h3>Quarto Livello</h3>
  <span>Full Insurance</span>
</div>
</div>
  );
}

export default Cards;