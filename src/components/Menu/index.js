import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PlayFilms logo" />
      </Link>

      <ButtonLink as={Link} className="ButtonLink" href="/cadastro/video">
        Nova Música
      </ButtonLink>
    </nav>
  );
}

export default Menu;