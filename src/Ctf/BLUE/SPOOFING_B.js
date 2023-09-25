import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
                <h1>Titolo</h1>
                <p>TESTO DESCRITTIVO</p>
            </div>
            <div>
                <h3>DOMANDA?</h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')}>RISP 1</Button>
                    <Button variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')}>RISP 2</Button>
                    <Button variant="contained" color={color} onClick={handleTrue}>RISP 3</Button>
                    <Button variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')}>RISP 4</Button>
                </Stack>
            </div>
        </div>
    );

}

export default SPOOFING_B;