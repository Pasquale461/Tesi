import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../../PopupBlue.css';

function SPOOFING_B() {
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
                <h1>SPOOFING</h1>
                <p>
Lo spoofing crea falsi segnali, informazioni o identità per ingannare un sistema o un utente. Nella contesto di una città intelligente, uno degli attacchi di spoofing più comuni coinvolge la creazione di un access point Wi-Fi fasullo con un nome (SSID) apparentemente legittimo per attirare le persone a connettersi.

È importante essere cauti quando ci si connette a reti Wi-Fi pubbliche e assicurarsi di utilizzare solo reti sicure e attendibili. Evitare di connettersi a reti aperte o non protette, verificare sempre l'autenticità delle reti Wi-Fi e utilizzare una rete privata virtuale (VPN).</p>
            </div>
            <div>
                <h3>Per proteggersi dall'attacco di spoofing in una rete Wi-Fi, è consigliabile utilizzare ____ </h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')} className="btn-custom">Un Firewall </Button>
                    <Button variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')} className="btn-custom">Un router</Button>
                    
                    <Button variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')} className="btn-custom">Un' Antivirus</Button>
                    <Button variant="contained" color={color} onClick={handleTrue} className="btn-custom"> una VPN</Button>
                </Stack>
            </div>
        </div>
    );

}

export default SPOOFING_B;