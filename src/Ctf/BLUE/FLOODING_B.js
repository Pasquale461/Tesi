import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './PopupBlue.css';

function FLOODING_B() {
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
                <h1>DATA FLOODING</h1>
                <p>Nelle città intelligenti moderne, l'infrastruttura stradale gioca un ruolo cruciale nella gestione efficiente del traffico. L'attacco di Data Flooding in un sistema di gestione del traffico di una città intelligente è un tentativo di sovraccaricare il sistema con dati falsificati o dannosi, creando il caos nelle strade. Per difendersi, è fondamentale implementare filtri per rilevare e bloccare dati sospetti e utilizzare autenticazione e crittografia avanzate per proteggere l'integrità dei dati.</p>
            </div>
            <div>
                <h3>Per proteggersi, è importante implementare un robusto sistema di ____________ per identificare e bloccare dati dannosi.</h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button className="btn-custom" variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')}>Autenticazione</Button>
                    <Button className="btn-custom" variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')}>Criptazione</Button>
                    <Button className="btn-custom" variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')}>Condivisione</Button>
                    <Button className="btn-custom" variant="contained" color={color} onClick={handleTrue}>Filtraggio</Button>
                </Stack>
            </div>
        </div>
    );

}

export default FLOODING_B;