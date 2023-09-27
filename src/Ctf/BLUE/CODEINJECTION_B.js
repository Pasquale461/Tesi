import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './PopupBlue.css';

function CODEINJECTION_B() {
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
            <div class="popup">
                <h1>CODE INJECTION</h1>
                <p>Un attacco di code injection è quando un aggressore inserisce codice dannoso in un servizio cloud di videosorveglianza di una città intelligente, sfruttando falle nella sicurezza. Per difendersi, è essenziale implementare validazioni rigorose dei dati, utilizzare framework sicuri, mantenere il software aggiornato e adottare misure di autenticazione e monitoraggio costante. La formazione del personale è altrettanto importante per riconoscere e rispondere prontamente agli attacchi.</p>
            </div>
            <div>
                <h3>Per prevenire un attacco di code injection, è consigliabile utilizzare un ___ delle applicazioni web.</h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button className="btn-custom" variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')}>Backup</Button>
                    <Button className="btn-custom" variant="contained" color={color} onClick={handleTrue}>Firewall</Button>
                    <Button className="btn-custom" variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')}>Account utente</Button>
                    <Button className="btn-custom" variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')}>Antivirus</Button>
                </Stack>
            </div>
        </div>
    );

}

export default CODEINJECTION_B;