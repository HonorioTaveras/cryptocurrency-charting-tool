import React from 'react';
import { Navbar } from 'react-bootstrap';

import style from './NavBar.css';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cryptocurrency-charting-tool.s3-us-west-2.amazonaws.com/graph.svg"
          width="200"
          height="200"
          className="d-inline-block align-bottom"
        />
      </Navbar.Brand>
      <Navbar.Brand href="#" className={style.nav}>Cryptocurrency Charting Tool</Navbar.Brand>
    </Navbar>
  );
}
