import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Raffles = (props) => {
  const sneaker = props;
  const [raffles, setRaffles] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/raffles', {
        sneakerID: sneaker.id,
      })
      .then((res) => {
        setRaffles(res.data);
        console.log(raffles, 'raffles');
      })
      .catch((err) => {
        console.log(err, 'Error getting data');
      });
  }, []);

  return (
    <table>
      {raffles}
    </table>
  );
};

export default Raffles;
