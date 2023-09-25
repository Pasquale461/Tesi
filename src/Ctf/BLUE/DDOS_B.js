import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './PopupBlue.css';

function DDOS_B() {
    const [stat, setStat] = React.useState(false);
    const [color_1, setColor_1] = React.useState('primary');
    const [color_2, setColor_2] = React.useState('primary');
    const [color_3, setColor_3] = React.useState('primary');
    const [color, setColor] = React.useState('primary');

    const handleTrue = () => {
        setStat(true)
        setColor('success')
      };

  const style = {
    height: '60%',
    width: '40%',
    borderRadius: '50px',
    backgroundColor: '#5a2a4f',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: '2',
  };

    return (
        <div style={style}>
            <div>
                <h1>DDOS</h1>
                <p>Un attacco DDoS su un sistema di controllo del traffico in una città intelligente è un pericolo in grado di congestionare la rete, mettendo a rischio la sicurezza pubblica.<br></br> Per difendersi, è essenziale implementare difese avanzate, monitorare costantemente il traffico, assicurare un'infrastruttura robusta e collaborare con i provider di servizi Internet per bloccare le fonti dannose alla radice. La formazione del personale è fondamentale per una risposta tempestiva.</p>
            </div>
            <div>
                <h3>Per proteggere un'infrastruttura di rete da un attacco DDoS, è fondamentale implementare una soluzione di __________ per filtrare il traffico dannoso.</h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button className="btn-custom" variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')}>criptazione</Button>
                    <Button className="btn-custom" variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')}>autenticazione</Button>
                    <Button className="btn-custom" variant="contained" color={color} onClick={handleTrue}>mitigazione</Button>
                    <Button className="btn-custom" variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')}>condivisione</Button>
                </Stack>
            </div>
        </div>
    );

}

export default DDOS_B;
