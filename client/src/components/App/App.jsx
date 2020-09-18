/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Chart from 'react-apexcharts';
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
  const [chartData, setChartData] = useState(null);
  const [series, setSeries] = useState(null);

  const getChartData = () => {
    Axios.get('https://api.coindesk.com/v1/bpi/historical/close.json').then(
      (res) => {
        const categories = Object.keys(res.data.bpi);
        const series = Object.values(res.data.bpi);
        setChartData({
          xaxis: {
            categories,
          },
        });

        setSeries([
          {
            name: 'Bitcoin Price',
            data: series,
          },
        ]);

        setIsLoaded(true);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      },
    );
  };

  useEffect(() => {
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
      (res) => {
        console.log('res data: ', res.data.bpi);
        getChartData();
        setPriceData(res.data.bpi);
      },
      (err) => {
        getChartData();
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
      <Row>
        <Chart
          className={style.chart}
          options={chartData}
          series={series}
          type="line"
          width="1111"
          height="333"
        />
      </Row>
    </Container>
  );
}
