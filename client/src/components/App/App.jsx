import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function App() {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
      (res) => {
        console.log('res data: ', res.data);
        setIsLoaded(true);
        setPriceData(res.data);
      },
      // eslint-disable-next-line no-shadow
      (err) => {
        setIsLoaded(true);
        setErr(err);
      },
    );
  }, []);

  return <div>hello world from App</div>;
}
