import React from 'react';
import styled from 'styled-components';
import { ModalComponent } from '../hooks/ModalHook.jsx';
import ModalReleaseButton from './ModalReleaseButton.jsx';

const ReleasesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-template-rows: repeat(2, 270px);
  gap: 50px 50px;
  grid-template-areas:
    "Upcoming1 Upcoming2 Upcoming3 Upcoming4"
    "Upcoming5 Upcoming6 Upcoming7 Upcoming8";
`;

const Upcoming1 = styled.div`
  grid-area: Upcoming1;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
  background: #fff;
`;

const Upcoming2 = styled.div`
  grid-area: Upcoming2;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
  background: #fff;
`;

const Upcoming3 = styled.div`
  grid-area: Upcoming3;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
  background: #fff;
`;

const Upcoming4 = styled.div`
  grid-area: Upcoming4;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
  background: #fff;
`;

const Upcoming5 = styled.div`
  grid-area: Upcoming5;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
  background: #fff;
`;

const Upcoming6 = styled.div`
  grid-area: Upcoming6;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
  background: #fff;
`;

const Upcoming7 = styled.div`
  grid-area: Upcoming7;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
  background: #fff;
`;

const Upcoming8 = styled.div`
  grid-area: Upcoming8;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
  background: #fff;
`;

const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const UpcomingReleases = (props) => {
  const sneaker = props;
  console.log(sneaker.releases[0].sneaker_id)
  return (
    <ReleasesContainer>
      <Upcoming1>
        <ModalComponent backgroundComponent={ModalBackground}>
          <ModalReleaseButton
            name={sneaker.releases[0].name}
            image={sneaker.releases[0].image}
            releaseDate={sneaker.releases[0].release_date}
            sneakerID={sneaker.releases[0].sneaker_id}
          />
        </ModalComponent>
      </Upcoming1>
      <Upcoming2>
        <ModalComponent backgroundComponent={ModalBackground}>
          <ModalReleaseButton
            name={sneaker.releases[1].name}
            image={sneaker.releases[1].image}
            releaseDate={sneaker.releases[1].release_date}
            sneakerID={sneaker.releases[1].sneaker_id}
          />
        </ModalComponent>
      </Upcoming2>
      <Upcoming3>
        <ModalComponent backgroundComponent={ModalBackground}>
          <ModalReleaseButton
            name={sneaker.releases[2].name}
            image={sneaker.releases[2].image}
            releaseDate={sneaker.releases[2].release_date}
            sneakerID={sneaker.releases[2].sneaker_id}
          />
        </ModalComponent>
      </Upcoming3>
      <Upcoming4>
        <ModalComponent backgroundComponent={ModalBackground}>
          <ModalReleaseButton
            name={sneaker.releases[3].name}
            image={sneaker.releases[3].image}
            releaseDate={sneaker.releases[3].release_date}
            sneakerID={sneaker.releases[3].sneaker_id}
          />
        </ModalComponent>
      </Upcoming4>
      <Upcoming5>
        <ModalComponent backgroundComponent={ModalBackground}>
          <ModalReleaseButton
            name={sneaker.releases[4].name}
            image={sneaker.releases[4].image}
            releaseDate={sneaker.releases[4].release_date}
            sneakerID={sneaker.releases[4].sneaker_id}
          />
        </ModalComponent>
      </Upcoming5>
      <Upcoming6>
        <ModalComponent backgroundComponent={ModalBackground}>
          <ModalReleaseButton
            name={sneaker.releases[5].name}
            image={sneaker.releases[5].image}
            releaseDate={sneaker.releases[5].release_date}
            sneakerID={sneaker.releases[5].sneaker_id}
          />
        </ModalComponent>
      </Upcoming6>
      <Upcoming7>
        <ModalComponent backgroundComponent={ModalBackground}>
          <ModalReleaseButton
            name={sneaker.releases[6].name}
            image={sneaker.releases[6].image}
            releaseDate={sneaker.releases[6].release_date}
            sneakerID={sneaker.releases[6].sneaker_id}
          />
        </ModalComponent>
      </Upcoming7>
      <Upcoming8>
        <ModalComponent backgroundComponent={ModalBackground}>
          <ModalReleaseButton
            name={sneaker.releases[7].name}
            image={sneaker.releases[7].image}
            releaseDate={sneaker.releases[7].release_date}
            sneakerID={sneaker.releases[7].sneaker_id}
          />
        </ModalComponent>
      </Upcoming8>
    </ReleasesContainer>
  );
};

export default UpcomingReleases;
