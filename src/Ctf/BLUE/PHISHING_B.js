import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './PopupBlue.css';

function PHISHING_B() {
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
                <h1>PHISHING</h1>
                <p>L'attacco di phishing è una tattica sofisticata utilizzata da cibercriminali per ottenere informazioni sensibili, come dettagli di accesso a servizi online, carte di credito o dati personali, travestendosi da entità di fiducia. Per difendersi, è essenziale educare i cittadini a riconoscere messaggi sospetti, verificare sempre le fonti online e implementare misure di sicurezza avanzate, come l'autenticazione a due fattori, per proteggere i dati sensibili.</p>
            </div>
            <div>
                <h3>L'utilizzo dell'__________ a due fattori può fornire una sicurezza aggiuntiva contro gli attacchi di phishing</h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button className="btn-custom" variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')}>Hashing</Button>
                    <Button className="btn-custom" variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')}>Firewall</Button>
                    <Button className="btn-custom" variant="contained" color={color} onClick={handleTrue}>Autenticazione</Button>
                    <Button className="btn-custom" variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')}>Scripting</Button>
                </Stack>
            </div>
        </div>
    );

}

export default PHISHING_B;