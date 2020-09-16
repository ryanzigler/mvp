import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import UpcomingReleases from './UpcomingReleases.jsx';
import mockReleases from '../dummyReleases';

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

const Wrapper = styled.section`
  background: #F1FAEE;
`;

const AppContainer = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const AppFlexChild = styled.div`
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
`;

const LogoContainer = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
`;

const SMlogo = styled.img`
  width: 265px;
  height: 80px;
  margin-bottom: 50px;
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
    <Wrapper>
      <LogoContainer>
        <LogoWrapper>
          <SMlogo src="https://elasticbeanstalk-us-east-2-579023676300.s3.us-east-2.amazonaws.com/sole-mate/Sole+Mate.png" alt="Sole Mate Logo" />
        </LogoWrapper>
      </LogoContainer>
      <AppContainer>
        <AppFlexChild>
          <UpcomingReleases releases={releases} />
        </AppFlexChild>
      </AppContainer>
    </Wrapper>
  );
};

export default App;
