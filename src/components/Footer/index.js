import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
          Imersão React da Alura
          <br />
        <a href="https://www.linkedin.com/in/leonardo-cristiano-de-oliveira-239562161/">Leonardo C. de Oliveira</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
