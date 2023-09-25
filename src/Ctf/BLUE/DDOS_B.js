import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
        <h1>Titolo</h1>
        <p>TESTO DESCRITTIVO</p>
      </div>
      <div>
        <h3>DOMANDA?</h3>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
          {answers.map((answer, index) => (
            <Button
              key={index}
              variant="contained"
              color={isAnswered && !answer.isCorrect ? 'default' : answer.color}
              disabled={isAnswered && !answer.isCorrect}
              onClick={() => handleAnswerClick(index)}
            >
              {answer.text}
            </Button>
          ))}
        </Stack>
      </div>
      <Button variant="contained" color="primary" onClick={resetComponent}>
        Resetta
      </Button>
    </div>
  );
}

export default DDOS_B;
