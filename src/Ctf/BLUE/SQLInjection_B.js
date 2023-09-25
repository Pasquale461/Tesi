import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../../PopupBlue.css';

function SQLInjection_B() {
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
                <h1>SQL INJECTION</h1>
                <p>L'attacco SQL Injection è una minaccia per la sicurezza delle città intelligenti, in quanto permette agli aggressori di accedere a informazioni sensibili dei cittadini attraverso vulnerabilità nei database. Per difendersi, è essenziale validare rigorosamente i dati in ingresso, utilizzare query parametrizzate, implementare un firewall delle applicazioni web e mantenere costantemente aggiornati i sistemi, al fine di proteggere le informazioni critiche.</p>
            </div>
            <div>
                <h3>Per difendersi da un attacco SQL Injection, è cruciale utilizzare accuratamente __________ per garantire che non contengano comandi dannosi.</h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button className="btn-custom" variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')}>algoritmi</Button>
                    <Button className="btn-custom" variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')}>antivirus</Button>
                    <Button className="btn-custom" variant="contained" color={color} onClick={handleTrue}>filtri</Button>
                    <Button className="btn-custom" variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')}> firme digitali</Button>
                </Stack>
            </div>
        </div>
    );

}

export default SQLInjection_B;