import React, { useState } from 'react';
import {
  Container,
  DropdownButton,
  Dropdown,
  Row,
  Col,
  Card,
} from 'react-bootstrap';

import style from './SelectCurrency.css';

export default function SelectCurrency({ priceData }) {
  const [currency, setCurrency] = useState('USD');
  console.log('price data keys: ', Object.keys(priceData));

  const handleChange = (eKey) => {
    console.log('ekey: ', eKey);
    setCurrency(eKey);
  };

  return (
    <Container>
      <Row>
        <Col>
          <DropdownButton
            variant="info"
            size="lg"
            title="Select your currency"
            className={style.select}
          >
            {Object.keys(priceData).map((currencyName) => (
              <Dropdown.Item eventKey={currencyName} onSelect={handleChange}>
                {currencyName}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }} className={style.select}>
            <Card.Body>
              <Card.Title>{currency}</Card.Title>
              <Card.Text>
                {Object.entries(priceData).map(
                  (currencyData) => currencyData[0] === currency && currencyData[1].rate,
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
