import React from 'react';
import Header from './Header';
import './../Contact.css';
import Lottie from 'lottie-react';
import animation from '../Animations/WebL.json';

function Contact() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
    }
    const maps = {
        borderRadius: '25px',
        width: '70%',
        marginBottom: '10%',

    }

    return (
        <div class="total">
            <Header></Header>
            <div className="content-wrapper">
                <div className="left-content">
                    <Lottie
                        animationData={animation}
                        style={style}
                    />
                </div>
                <div className="right-content">
                    <div class="rounded-box">
                        <h2>Lavoro di Tesi</h2>
                        <p>La nostra tesi si concentra su un progetto di sviluppo e implementazione di una piattaforma web dedicata alle Competitions in Cybersecurity,
                            chiamate CTF (Capture The Flag). L'obiettivo principale è analizzare le carenze esistenti nella formazione delle persone che vogliono imparare sulla sicurezza informatica,
                            specialmente per coloro che sono nuovi in questo campo. In sostanza, abbiamo creato un ambiente online dove le persone possono esercitarsi e migliorare le proprie abilità in sicurezza informatica.
                            Questo è importante perché aiuta a colmare il divario tra la teoria e la pratica,
                            fornendo agli aspiranti esperti di sicurezza un luogo sicuro per imparare e crescere.</p>
                    </div>
                </div>
            </div>
            <div className="content-wrapper">
                <div style={{ width: "50%" }}>
                    <h2>Sviluppo</h2>
                    <div className="google-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1355062224084!2d16.878932676045643!3d41.10973157133649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e84ee4ac5023%3A0x2fa7d7c509b8013f!2sUniversit%C3%A0%20degli%20Studi%20di%20Bari%20-%20Dipartimento%20di%20Informatica!5e0!3m2!1sit!2sit!4v1695721250507!5m2!1sit!2sit"
                            style={maps}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div style={{ width: "50%" }}>
                    <h2>Tesisti:</h2>
                    <a href="https://www.linkedin.com/in/pasquale-manfredi-933414291/" target="_blank" rel="noopener noreferrer" title="Pasquale Manfredi">
                        <img src={require('./../images/paky.jpg')} class="icon"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/giuseppe-moramarco-0995a9216/" target="_blank" rel="noopener noreferrer" title="Giuseppe Moramarco">
                        <img src={require('./../images/mora.jpg')} class="icon"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/ardit-shaba-0544b7293/" target="_blank" rel="noopener noreferrer" title="Ardit Shaba">
                        <img src={require('./../images/shaba.png')} class="icon"></img>
                    </a>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <img src={require('./../images/serlab.png')} class="icon-serlab "/>
                </div>
            </footer>
        </div>


    );
}

export default Contact;