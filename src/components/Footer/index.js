import React from 'react';
import { FooterBase } from './styles';
import Logo from'../../assets/img/Logo.png';
import '../Footer/';

function Footer() {
  return (
    <FooterBase>
      <a href="https://sobit.com.br">
        <img className=" Logo" src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Criado para aprender
        {' '}
        <a href="https://sobit.com.br">
          || B.I Tecnology & Sobit
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
