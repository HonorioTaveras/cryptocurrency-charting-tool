import React from 'react';
import { Navbar } from 'react-bootstrap';

import style from './NavBar.css';

export default function NavBar() {
  return (
    <Navbar className={style.nav}>
      <Navbar.Brand href="#home">
        Cryptocurrency Charting Tool
      </Navbar.Brand>
    </Navbar>
  );
}
