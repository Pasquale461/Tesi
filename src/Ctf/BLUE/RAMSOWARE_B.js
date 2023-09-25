import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../../PopupBlue.css';

function RAMSOWARE_B() {
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
                <h1>RAMSOWARE</h1>
                <p>Un attacco ransomware su un PC di una centrale elettrica di controllo in una città intelligente è una minaccia che crittografa i dati, bloccando l'erogazione di energia. La difesa richiede backup regolari, aggiornamenti di sicurezza, formazione del personale e piani di risposta agli incidenti per ripristinare il sistema senza pagare il riscatto. La protezione dei dati critici e la collaborazione con le autorità sono essenziali per evitare interruzioni dell'energia.</p>
            </div>
            <div>
                <h3>Per proteggere i tuoi dati da un attacco ransomware, è importante avere __________ dei file e del sistema regolarmente.</h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button className="btn-custom" variant="contained" color={color} onClick={handleTrue}>backup</Button>
                    <Button className="btn-custom" variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')}>crittografia</Button>
                    <Button className="btn-custom" variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')}>condivisione</Button>
                    <Button className="btn-custom" variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')}>eliminazione</Button>
                </Stack>
            </div>
        </div>
    );

}

export default RAMSOWARE_B;