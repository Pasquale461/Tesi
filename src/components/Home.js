// src/components/Home.js
import React from 'react';
import './../App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlocks';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <Parallax pages={4.17} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="sky"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="city2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="city"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="Logo"></div>
          </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="bridge"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <TextBlock />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0} >
          <div id='Hack'>
            <div>
              <Link to="Ctfs">
                <img src={require('../images/hacker.png')} id='hacker' />
              </Link>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0}> {/* Aggiungi un nuovo ParallaxLayer per il footer */}
          <Footer />

        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default Home;
