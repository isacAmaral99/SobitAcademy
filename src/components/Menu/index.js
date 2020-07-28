import React from 'react';
import {Link}  from 'react-router-dom';
import Logo from'../../assets/img/Logo.png'
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink/index';

function Menu(){

    return(
       <nav className="Menu">
           {/* {se nao mudar o href para to ele nao vai para a pagina } */}
           <Link to="/">

            <img  className="Logo" src={Logo} alt="Sobit logo" />

           </Link>
           {/* ele coloca como botao porem para funcionar como uma tag a */}
           
       </nav>
    );

}

export default Menu;