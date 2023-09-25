import './../CtfStyle.css';

function TextBlock() {
    return (
        <div id="textblock">
            <h1 id="textblock-title"> Benvenuti nel Mondo delle Competizioni CTF in Cybersecurity</h1>
            <div id="textblock-container">
                <p className="textblock-content">
                Benvenuti nel mondo affascinante e vitale della sicurezza informatica nelle Smart City, dove il futuro si fonde con la tecnologia e la connettività per creare ambienti urbani più efficienti ed ecologicamente sostenibili. Il nostro sito è nato come parte di un progetto di tesi, ma è stato concepito per accogliere chiunque desideri immergersi nell'entusiasmante universo degli attacchi informatici e della difesa cibernetica, con uno sguardo attento alle sfide uniche delle città intelligenti.
</p><br></br>
<b>Smart City: I Nodi della Rivoluzione Tecnologica</b>
<br></br>
<img src={require('../images/cars.png')} className='center' style={{width : '70%'}}/>
<p  className="textblock-content">Le Smart City rappresentano l'incarnazione della promessa di una vita urbana migliorata attraverso l'uso intelligente della tecnologia. Qui, i sistemi di comunicazione avanzati, l'Internet delle Cose (IoT), l'intelligenza artificiale (IA) e molte altre innovazioni convergono per ottimizzare la mobilità, l'energia, la sicurezza e i servizi pubblici.

Tuttavia, questa interconnessione espone le Smart City a rischi senza precedenti. Gli attacchi informatici possono compromettere i servizi critici, dalla gestione del traffico all'erogazione dell'energia, mettendo a repentaglio la vita quotidiana dei cittadini. Un esempio? Un hacker potrebbe manipolare i semafori per creare il caos stradale o interrompere l'approvvigionamento elettrico in tutta la città.
</p><br></br>
<b>Il Blue Team e il Red Team: Il Cuore della Sicurezza Informatica</b>
<br></br>
<img src={require('../images/teams.png')} className='center' style={{width : '70%'}}/>
<p  className="textblock-content">
Nel nostro percorso, vi introdurremo al concetto dei "blue team" e dei "red team". Il "blue team" è dedicato alla difesa, mentre il "red team" assume il ruolo dell'attaccante. Questo approccio simulativo ci aiuterà a comprendere come gli attacchi possono avvenire e come proteggerci.Benvenuti in Questa Avventura Straordinaria

Siamo entusiasti di condividere questo viaggio con voi, esplorando le sfide e le soluzioni della sicurezza informatica nelle Smart City. Questo sito è il punto di partenza per diventare veri esperti in questo campo affascinante. Pronti a esplorare insieme il futuro e a contribuire a rendere le città intelligenti un luogo più sicuro per tutti? Entra nel nostro mondo e preparati per un'avventura emozionante!

                </p>
                <img src={require('../images/bluework.png')} className='center' style={{width : '70%'}}/>

            </div>
        </div>
    );
}

export default TextBlock;