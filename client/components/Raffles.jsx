import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
// import axios from 'axios';

const dummyRaffle = [
  {
    store: 'Acme', url: 'https://ipaddress.net', logo: 'https://via.placeholder.com/275x40/000000/FFFFFF/?text=retailer+logo', close_date: '2021-03-16T01:00:00.017Z',
  },
  {
    store: 'Globex', url: 'https://ipaddress.net', logo: 'https://via.placeholder.com/275x40/000000/FFFFFF/?text=retailer+logo', close_date: '2021-03-16T01:00:00.017Z',
  },
  {
    store: 'Hooli Shoes', url: 'https://ipaddress.net', logo: 'https://via.placeholder.com/275x40/000000/FFFFFF/?text=retailer+logo', close_date: '2021-03-16T01:00:00.017Z',
  },
  {
    store: 'Initech', url: 'https://ipaddress.net', logo: 'https://via.placeholder.com/275x40/000000/FFFFFF/?text=retailer+logo', close_date: '2021-03-16T01:00:00.017Z',
  },
  {
    store: 'Massive Dynamic', url: 'https://ipaddress.net', logo: 'https://via.placeholder.com/275x40/000000/FFFFFF/?text=retailer+logo', close_date: '2021-03-16T01:00:00.017Z',
  },
];

const FlexContainer = styled.div`
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
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
  font-family: Roboto;

`;

const FlexChild1 = styled.div`
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: center;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 30px;
  margin-right: 30px;
  border-radius: 10px;
`;

const FlexChild2 = styled.div`
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 30px;
  margin-right: 30px;
  border-radius: 10px;
`;

const FlexChild3 = styled.div`
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 30px;
  margin-right: 30px;
  border-radius: 10px;
`;

const FlexChild4 = styled.div`
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 30px;
  margin-right: 30px;
  border-radius: 10px;
`;

const FlexChild5 = styled.div`
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 30px;
  margin-right: 30px;
  border-radius: 10px;
`;

const RaffleGrid = styled.div`
  display: grid;
  justify-self: center;
  grid-template-columns: 292.5px;
  grid-template-rows: 80px 50px 50px 60px;
  gap: 1px 1px;
  grid-template-areas:
    "Logo"
    "Store"
    "Date"
    "Button";
  background: #F1FAEE;
  border-radius: 10px;
`;

const RaffleButton = styled.a`
  color: black;
  width: 292.5px;
  grid-area: Button;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E63946;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  border-radius: 0 0 10px 10px;
  font-size: 18px
`;

const RaffleDate = styled.div`
  grid-area: Date;
  width: 292.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: #457B9D;
`;

const RaffleStore = styled.div`
  grid-area: Store;
  width: 292.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 24px;
`;

const RaffleLogo = styled.div`
  grid-area: Logo;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 292.5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Raffles = (props) => {
  const [raffles, setRaffles] = useState(dummyRaffle);

  // useEffect(() => {
  //   console.log(sneakerID, 'sneakerID in raffles');
  //   axios
  //     .get('http://localhost:3000/api/raffles', {
  //       sneaker_id: sneakerID,
  //     })
  //     .then((res) => {
  //       setRaffles(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err, 'Error getting data');
  //     });
  // }, []);

  const formatLink = (address) => {
    let link = '';
    let currentURL = address;
    link = `window.location.href=${currentURL}`
    return link;
  };

  return (
    <FlexContainer>
      <FlexChild1>
        <RaffleGrid>
          <RaffleLogo>
            <img src={raffles[0].logo} alt={raffles[0].store} />
          </RaffleLogo>
          <RaffleStore>{raffles[0].store}</RaffleStore>
          <RaffleDate>Ends {moment(raffles[0].date).format('MM-DD-YYYY')}</RaffleDate>
          <RaffleButton href={raffles[0].url}>View Raffle</RaffleButton>
        </RaffleGrid>
      </FlexChild1>
      <FlexChild2>
        <RaffleGrid>
          <RaffleLogo>
            <img src={raffles[1].logo} alt={raffles[1].store} />
          </RaffleLogo>
          <RaffleStore>{raffles[1].store}</RaffleStore>
          <RaffleDate>Ends {moment(raffles[1].date).format('MM-DD-YYYY')}</RaffleDate>
          <RaffleButton href={raffles[1].url}>View Raffle</RaffleButton>
        </RaffleGrid>
      </FlexChild2>
      <FlexChild3>
        <RaffleGrid>
          <RaffleLogo>
            <img src={raffles[2].logo} alt={raffles[2].store} />
          </RaffleLogo>
          <RaffleStore>{raffles[2].store}</RaffleStore>
          <RaffleDate>Ends {moment(raffles[2].date).format('MM-DD-YYYY')}</RaffleDate>
          <RaffleButton href={raffles[2].url}>View Raffle</RaffleButton>
        </RaffleGrid>
      </FlexChild3>
      <FlexChild4>
        <RaffleGrid>
          <RaffleLogo>
            <img src={raffles[3].logo} alt={raffles[3].store} />
          </RaffleLogo>
          <RaffleStore>{raffles[3].store}</RaffleStore>
          <RaffleDate>Ends {moment(raffles[3].date).format('MM-DD-YYYY')}</RaffleDate>
          <RaffleButton href={raffles[3].url}>View Raffle</RaffleButton>
        </RaffleGrid>
      </FlexChild4>
      <FlexChild5>
        <RaffleGrid>
          <RaffleLogo>
            <img src={raffles[4].logo} alt={raffles[4].store} />
          </RaffleLogo>
          <RaffleStore>{raffles[4].store}</RaffleStore>
          <RaffleDate>Ends {moment(raffles[4].date).format('MM-DD-YYYY')}</RaffleDate>
          <RaffleButton href={raffles[4].url}>View Raffle</RaffleButton>
        </RaffleGrid>
      </FlexChild5>
    </FlexContainer>
  );
};

export default Raffles;
