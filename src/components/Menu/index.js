import React from 'react';
import Logo from '../../assests/img/valteraflix.png';
import './Menu.css'
import Button from '../Button';
function Menu(){
    return(
        <nav className="Menu">
            <a href="/"> 
            <img className="Logo" src={Logo} alt="ValteraFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                New vídeo
            </Button>
        </nav>
    );
}

export default Menu;