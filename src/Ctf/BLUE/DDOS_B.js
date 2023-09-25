import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../../PopupBlue.css';

function DDOS_B() {
  const initialAnswers = [
    { text: 'RISP 1', color: 'primary', isCorrect: false },
    { text: 'RISP 2', color: 'primary', isCorrect: false },
    { text: 'RISP 3', color: 'primary', isCorrect: true }, // La risposta 3 è corretta
    { text: 'RISP 4', color: 'primary', isCorrect: false },
  ];

  const [answers, setAnswers] = useState(initialAnswers);
  const [isAnswered, setIsAnswered] = useState(false);

  const resetComponent = () => {
    setAnswers(initialAnswers);
    setIsAnswered(false);
  };

  const handleAnswerClick = (index) => {
    if (isAnswered) {
      return; // Se è già stata data una risposta, esce dalla funzione
    }

    const updatedAnswers = [...answers];
    if (updatedAnswers[index].isCorrect) {
      updatedAnswers[index].color = 'success'; // Imposta la risposta corretta su 'success'
      setIsAnswered(true); // Imposta lo stato a "risposta data"
    } else {
      updatedAnswers[index].color = 'error'; // Imposta le risposte sbagliate su 'error'
    }
    setAnswers(updatedAnswers);
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

  useEffect(() => {
    // Mescola l'array delle risposte quando il componente viene montato
    const shuffledAnswers = [...initialAnswers].sort(() => Math.random() - 0.5);
    setAnswers(shuffledAnswers);
  }, []);

    return (
        <div style={style}>
            <div>
                <h1>DDOS</h1>
                <p>Un attacco DDoS su un sistema di controllo del traffico in una città intelligente è un pericolo in grado di congestionare la rete, mettendo a rischio la sicurezza pubblica.<br></br> Per difendersi, è essenziale implementare difese avanzate, monitorare costantemente il traffico, assicurare un'infrastruttura robusta e collaborare con i provider di servizi Internet per bloccare le fonti dannose alla radice. La formazione del personale è fondamentale per una risposta tempestiva.</p>
            </div>
            <div>
                <h3>___ è una tecnica comune per difendersi da un attacco DDoS.</h3>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
                    <Button className="btn-custom" variant="contained" color={color_1} disabled={stat} onClick={() => setColor_1('error')}>La disattivazione del firewall</Button>
                    <Button className="btn-custom" variant="contained" color={color_2} disabled={stat} onClick={() => setColor_2('error')}>La condivisione delle password</Button>
                    <Button className="btn-custom" variant="contained" color={color} onClick={handleTrue}>L'analisi del traffico</Button>
                    <Button className="btn-custom" variant="contained" color={color_3} disabled={stat} onClick={() => setColor_3('error')}>L'utilizzo di antivirus</Button>
                </Stack>
            </div>
        </div>
    );

}

export default DDOS_B;
