import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import moment from 'moment';
import { createGlobalStyle } from 'styled-components';
import UpcomingReleases from './UpcomingReleases.jsx';
import mockReleases from '../dummyReleases';
import mockRaffles from '../dummyRaffles';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    word-spacing: .0625rem;
    background: #fff;
    line-height: 1.15;
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    text-size-adjust: 100%
    word-spacing: 1px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    box-sizing: border-box;
    min-height: 100vh;
    position: relative;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    text-size-adjust: 100%
  }
`;

const App = () => {
  const [releases, setReleases] = useState(mockReleases);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/releases')
      .then((res) => {
        setReleases(res.data);
        console.log(releases, 'releases');
      })
      .catch((err) => {
        console.log(err, 'Error getting data');
      });
  }, []);

  return (
    <div>
      <UpcomingReleases releases={releases} />
    </div>
  );
};

export default App;
