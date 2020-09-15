import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Raffles from './Raffles.jsx';
import Modal from '../hooks/ModalHook.jsx';

const StyledModal = Modal.styled`
  width: calc(100% - 5rem);
  height: flex;
  display: inline;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: .25rem;
  box-shadow: 0 3px 16px rgba(0,0,0,.6);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-template-rows: repeat(2, 270px);
  gap: 30px 30px;
  grid-template-areas:
    "Upcoming1 Upcoming2 Upcoming3 Upcoming4"
    "Upcoming5 Upcoming6 Upcoming7 Upcoming8";
  font-size: 14px;
  text-align: center;
  `;

const Upcoming1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px 50px;
  gap: 1px 1px;
  grid-template-areas:
    "Name1"
    "Img1"
    "Button1";
  grid-area: Upcoming1;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
`;

const Name1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Name1;
  background-color: #e02d2dc7;
  font-family: roboto;
  font-weight: 500;
  font-size: 14px;
`;

const Img1 = styled.img`
  grid-area: Img1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 265px;
  height: 160px;
`;

const Button1 = styled.button`
  grid-area: Button1;
`;

const Upcoming2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px 50px;
  gap: 1px 1px;
  grid-template-areas:
    "Name2"
    "Img2"
    "Button2";
  grid-area: Upcoming2;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
`;

const Name2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Name2;
  background-color: #e02d2dc7;
  font-family: roboto;
  font-weight: 500;
  font-size: 14px;
`;

const Img2 = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Img2;
  width: 270px;
  margin-top: 42px;
`;

const Button2 = styled.button`
  grid-area: Button2;
`;

const Upcoming3 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px 50px;
  gap: 1px 1px;
  grid-template-areas:
    "Name3"
    "Img3"
    "Button3";
  grid-area: Upcoming3;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
`;

const Name3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Name3;
  background-color: #e02d2dc7;
  font-family: roboto;
  font-weight: 500;
  font-size: 14px;
`;

const Img3 = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Img3;
  width: 270px;
  border-radius: 5px;
`;

const Button3 = styled.button`
  grid-area: Button3;
`;

const Upcoming4 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px 50px;
  gap: 1px 1px;
  grid-template-areas:
    "Name4"
    "Img4"
    "Button4";
  grid-area: Upcoming4;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
`;

const Name4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Name4;
  background-color: #e02d2dc7;
  font-family: roboto;
  font-weight: 500;
`;

const Img4 = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Img4;
  width: 260px;
  margin-top: 25px;
  margin-left: 5px;
`;

const Button4 = styled.button`
  grid-area: Button4;
`;

const Upcoming5 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px 50px;
  gap: 1px 1px;
  grid-template-areas:
    "Name5"
    "Img5"
    "Button5";
  grid-area: Upcoming5;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
`;

const Name5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Name5;
  background-color: #e02d2dc7;
  font-family: roboto;
  font-weight: 500;
`;

const Img5 = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Img5;
  width: 260px;
  margin-top: 20px;
  margin-left: 5px;
`;

const Button5 = styled.button`
  grid-area: Button5;
`;

const Upcoming6 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px 50px;
  gap: 1px 1px;
  grid-template-areas:
    "Name6"
    "Img6"
    "Button6";
  grid-area: Upcoming6;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
`;

const Name6 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Name6;
  background-color: #e02d2dc7;
  font-family: roboto;
  font-weight: 500;
`;

const Img6 = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Img6;
  width: 270px;
  margin-top: 30px;
`;

const Button6 = styled.button`
  grid-area: Button6;
`;

const Upcoming7 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px 50px;
  gap: 1px 1px;
  grid-template-areas:
    "Name7"
    "Img7"
    "Button7";
  grid-area: Upcoming7;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
`;

const Name7 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Name7;
  background-color: #e02d2dc7;
  font-family: roboto;
  font-weight: 500;
`;

const Img7 = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Img7;
  width: 270px;
`;

const Button7 = styled.button`
  grid-area: Button7;
`;

const Upcoming8 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px 50px;
  gap: 1px 1px;
  grid-template-areas:
    "Name8"
    "Img8"
    "Button8";
  grid-area: Upcoming8;
  box-shadow: 7px 10px 20px 3px;
  border-radius: 5px;
`;

const Name8 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Name8;
  background-color: #e02d2dc7;
  font-family: roboto;
  font-weight: 500;
`;

const Img8 = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Img8;
  width: 270px;
  margin-top: 25px;
  border-radius: 5px;
`;

const Button8 = styled.button`
  grid-area: Button8;
`;

// const LinkWrapper = styled.button`
//   background: transparent;
//   border: none !important;
//   font-size:0;

//   &:hover {
//     opacity: 0.5;
//     cursor: pointer;
//   }
// `;

// const ModalHeader = styled.header`
//   height: 18px;
//   padding: 24px 24px 24px 32px;
//   position: relative;
//   display: flex;
//   justify-content: flex-end;
//   line-height: 1;
// `;

// const HeaderSpacer = styled.div`
//   flex: 1;
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 0%;
//   display: flex;
//   align-items: center;
// `;

// const CloseButtonWrapper = styled.div`
//   font-size: 1rem;
// `;

// const CloseButton = styled.button`
//   border-style: none;
//   font-size: inherit;
//   font-weight: 700;
//   letter-spacing: 0.1px;
//   text-align: center;
//   word-spacing: 0px;
//   color: inherit;
//   height: 32px;
//   width: 32px;
//   margin: -8px -8px -8px -8px;
//   padding: 8px 8px 8px 8px;
//   min-height: 16px;
//   display: inline-flex;
//   border-radius: 50%;
//   cursor: pointer;
//   background: transparent;

//   &:hover {
//     background: #f1f2f4;
//     transition: background .15s ease-in-out;
//     text-transform: none;
//   }
// `;

// const ModalPaddingWrapper = styled.div`
//   padding-bottom: 24px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 0px;
//   position: relative;
//   overflow: auto;
//   display: block;
// `;

// const ModalContainer = styled.div`
//   font-size: 16px;
//   width: 100%
//   height: 31.25rem;
//   margin: 0;
//   display: block;
// `;

const UpcomingReleases = (props) => {
  const sneaker = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <GridContainer>
      <Upcoming1>
        <Name1>{sneaker.releases[0].name}</Name1>
        <Img1 src={sneaker.releases[0].image} alt={sneaker.releases[0].name} />
        <Button1 onClick={toggleModal}>
          <div>Find Raffles</div>
        </Button1>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <div>Test</div>
        </StyledModal>
      </Upcoming1>
      <Upcoming2>
        <Name2>{sneaker.releases[1].name}</Name2>
        <Img2 src={sneaker.releases[1].image} alt={sneaker.releases[1].name} />
        <Button2 onClick={toggleModal}>Find Raffles</Button2>
      </Upcoming2>
      <Upcoming3>
        <Name3>{sneaker.releases[2].name}</Name3>
        <Img3 src={sneaker.releases[2].image} alt={sneaker.releases[2].name} />
        <Button3 onClick={toggleModal}>Find Raffles</Button3>
      </Upcoming3>
      <Upcoming4>
        <Name4>{sneaker.releases[3].name}</Name4>
        <Img4 src={sneaker.releases[3].image} alt={sneaker.releases[3].name} />
        <Button4 onClick={toggleModal}>Find Raffles</Button4>
      </Upcoming4>
      <Upcoming5>
        <Name5>{sneaker.releases[4].name}</Name5>
        <Img5 src={sneaker.releases[4].image} alt={sneaker.releases[4].name} />
        <Button5 onClick={toggleModal}>Find Raffles</Button5>
      </Upcoming5>
      <Upcoming6>
        <Name6>{sneaker.releases[5].name}</Name6>
        <Img6 src={sneaker.releases[5].image} alt={sneaker.releases[5].name} />
        <Button6 onClick={toggleModal}>Find Raffles</Button6>
      </Upcoming6>
      <Upcoming7>
        <Name7>{sneaker.releases[6].name}</Name7>
        <Img7 src={sneaker.releases[6].image} alt={sneaker.releases[6].name} />
        <Button7 onClick={toggleModal}>Find Raffles</Button7>
      </Upcoming7>
      <Upcoming8>
        <Name8>{sneaker.releases[7].name}</Name8>
        <Img8 src={sneaker.releases[7].image} alt={sneaker.releases[7].name} />
        <Button8 onClick={toggleModal}>Find Raffles</Button8>
      </Upcoming8>
    </GridContainer>
  );
};

export default UpcomingReleases;
