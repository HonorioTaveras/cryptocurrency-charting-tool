/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Col, Container, Row, Spinner,
} from 'react-bootstrap';

// COMPONENTS
import style from './App.css';
import NavBar from '../NavBar/NavBar.jsx';
import SelectCurrency from '../SelectCurrency/SelectCurrency.jsx';

export default function App() {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
      (res) => {
        console.log('res data: ', res.data.bpi);
        setIsLoaded(true);
        setPriceData(res.data.bpi);
      },
      // eslint-disable-next-line no-shadow
      (err) => {
        setIsLoaded(true);
        setErr(err);
      },
    );
  }, []);

  if (err) {
    return (
      <div>
        Error:
        {err.message}
      </div>
    );
  }
  if (!isLoaded) {
    return (
      <Spinner className={style.spinner} animation="border" role="status" />
    );
  }
  return (
    <Container>
      <NavBar />
      <Row>
        <Col md={{ offset: 4 }}>
          <SelectCurrency priceData={priceData} />
        </Col>
      </Row>
    </Container>
  );
}
