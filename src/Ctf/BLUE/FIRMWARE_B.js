import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './PopupBlue.css';

function FIRMWARE_B() {
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
                <h1>ATTACCO FIRMWARE AUTOVELOX</h1>
                <p>Un attacco al firmware è un tentativo di compromettere il software di base incorporato in un dispositivo, come un dispositivo IoT, per ottenere il controllo o l'accesso non autorizzato. In una città intelligente, questo tipo di attacco può mettere a rischio l'intera infrastruttura dei trasporti applicato al rispetto delle velocità con gli autovelox.

È essenziale mantenere il software del dispositivo sempre aggiornato. Inoltre, l'uso di autenticazioni forti e il monitoraggio continuo per rilevare comportamenti anomali sono cruciali per la sicurezza.</p>
            </div>
            <div>
                <h3>Per difendersi da un attacco al firmware su un dispositivo IoT, è essenziale mantenere il firmware sempre ___.</h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button className="btn-custom"  variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')}>Crittografato</Button>
                    <Button className="btn-custom"  variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')}>Isolato</Button>
                    <Button className="btn-custom"  variant="contained" color={color} onClick={handleTrue}>Aggiornato</Button>
                    <Button className="btn-custom" variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')}>Ripristinato</Button>
                </Stack>
            </div>
        </div>
    );

}

export default FIRMWARE_B;