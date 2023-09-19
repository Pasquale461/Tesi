import React from 'react';

function SQLInjection() {
  return (
    <div id="sql-injection">
      <h1>SQL Injection</h1>
      <div class="attack-phase">
        <h2>1. Reconnaissance (Ricerca)</h2>
        <svg width="10%" height="8%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          
        </svg>
        <p>In questa fase, gli attaccanti cercano di identificare potenziali vulnerabilità nell'applicazione e raccogliere informazioni sulle strutture del database.</p>
      </div>
      <div class="attack-phase">
        <h2>2. Weaponization (Armatizzazione)</h2>
        <svg width="8%" height="8%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         
        </svg>
        <p>Gli attaccanti preparano le query SQL malevole da utilizzare nell'attacco, cercando di sfruttare le vulnerabilità scoperte.</p>
      </div>
      <div class="attack-phase">
        <h2>3. Delivery (Consegna)</h2>
        <svg width="8%" height="8%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         
        </svg>
        <p>In questa fase, gli attaccanti consegnano le query SQL malevole all'applicazione bersaglio, cercando di inserirle o eseguirle attraverso i campi vulnerabili.</p>
      </div>
      <div class="attack-phase">
        <h2>4. Exploitation (Sfruttamento)</h2>
        <svg fill="#000000" width="8%" height="8%" viewBox="0 0 64 64" data-name="Material Expand" xmlns="http://www.w3.org/2000/svg">
         
        </svg>
        <p>Gli attaccanti cercano di sfruttare con successo le query SQL malevole per ottenere accesso non autorizzato ai dati del database.</p>
      </div>
      <div class="attack-phase">
        <h2>5. Installation (Installazione)</h2>
        <svg width="8%" height="8%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         
        </svg>
        <p>Questa fase potrebbe non applicarsi direttamente a un attacco SQL injection, poiché non implica l'installazione di malware o backdoor sui sistemi delle vittime.</p>
      </div>
      <div class="attack-phase">
        <h2>6. Command and Control (Comando e Controllo)</h2>
        <svg width="8%" height="8%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
         
        </svg>
        <p>Gli attaccanti cercano di mantenere un certo grado di controllo sulle query SQL malevole inviate all'applicazione bersaglio.</p>
      </div>
      <div class="attack-phase">
        <h2>7. Actions on Objectives (Azioni sugli Obiettivi)</h2>
        <svg width="8%" height="8%" viewBox="-0.5 0 25 25" xmlns="http://www.w3.org/2000/svg">
          
        </svg>
        <p>In questa fase, gli attaccanti raggiungono il loro obiettivo, che potrebbe essere l'accesso non autorizzato ai dati del database o la modifica dei dati stessi.</p>
      </div>
    </div>
  );
}

export default SQLInjection;
