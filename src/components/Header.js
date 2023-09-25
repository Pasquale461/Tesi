import Drawer from '@mui/material/Drawer';
import './../Header.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InfoIcon from '@mui/icons-material/Info';
import { ListItem, List, Button, Divider } from '@mui/material';



const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    const menuLogo = {
        width: '120px',
        height: '120px',
    }

    return (
        <div className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰ Menu
            </button>
            <h1 className="header-title">CyberValley</h1>
            
            <h1 className="header-title">Hacker's Playground</h1>
            {/*
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-close" onClick={closeMenu}>
          &times;
        </button>
        <ul>
        <Link to="../">
        <li><a href="#">Home</a></li>
        </Link>
          
        <Link to="../Ctfs">
        <li><a href="#">Ctf</a></li>
        </Link>
          <li><a href="#">About</a></li>
          
        </ul>
      </nav> */}
            <Drawer anchor='left'
                open={isMenuOpen}
                onClose={closeMenu} // Chiudi il Drawer utilizzando la funzione closeMenu
                ModalProps={{
                  // Aggiungi il comportamento per chiudere il Drawer quando si clicca fuori da esso
                  onClick: closeMenu,
                }}>

                
                <List >
                    <ListItem className='center'>
                        <img src={require("../images/LogoSV.png")} style={menuLogo}/>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem  button component={Link} to='../' onClick={() => setMenuOpen(true)}> 
                        <HomeIcon /><a href="#" className='LinkNav' >Home</a>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem  button component={Link} to='../Ctfs' onClick={() => setMenuOpen(true)}>
                        <LocationCityIcon /><a href="#" className='LinkNav'>Smart City</a>
                    </ListItem>
                    <ListItem  button component={Link} to='../Contact' onClick={() => setMenuOpen(true)}>
                        <InfoIcon /><a href="#" className='LinkNav'>Contact</a>
                    </ListItem>
                </List>





            </Drawer>

        </div>
    );
};

export default Header;

