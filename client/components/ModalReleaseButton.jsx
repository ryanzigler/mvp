import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Raffles from './Raffles.jsx';
import Modal from '../hooks/ModalHook.jsx';

const StyledModal = Modal.styled`
  width: calc(60% - 5rem);
  height: flex;
  display: inline;
  align-items: center;
  justify-content: center;
  background: #1D3557;
  border-radius: .25rem;
  box-shadow: 0 3px 16px rgba(0,0,0,.6);
`;

const ModalButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px 50px;
  gap: 1px 1px;
  grid-template-areas:
    "Name"
    "Upcoming"
    "Button";
  font-size: 14px;
  text-align: center;
`;

const ReleaseName = styled.div`
  grid-area: Name;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #A8DADC;
  font-family: roboto;
  font-weight: 500;
  font-size: 14px;
`;

const ReleaseImage = styled.img`
  align-items: center;
  justify-content: center;
  grid-area: Upcoming;
  width: 270px;
`;

const ReleaseButtonContainer = styled.div`
  grid-area: Button;
  background-color: #E63946;
  font
`;

const ReleaseButton = styled.button`
  color: #fbf8f8;
  width: 270px;
  font-weight: 800;
  font-size: 16px;
  white-space: nowrap;
  word-spacing: 1px;
  height: 50px;
  padding: 16px 0 16px 0;
  border-style: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px

  &:hover {
    transition: box-shadow 0.15s ease-in-out 0s;
    box-shadow: rgb(255, 255, 255) 0px 4px 0px 0px inset;
  }
`;

const ModalHeader = styled.header`
  height: 18px;
  padding: 24px 24px 24px 32px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  line-height: 1;
`;

const HeaderSpacer = styled.div`
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  display: flex;
  align-items: center;
`;

const CloseButtonWrapper = styled.div`
  font-size: 1rem;
`;

const CloseButton = styled.button`
  border-style: none;
  font-size: inherit;
  font-weight: 700;
  letter-spacing: 0.1px;
  text-align: center;
  word-spacing: 0px;
  color: inherit;
  height: 32px;
  width: 32px;
  margin: -8px -8px -8px -8px;
  padding: 8px 8px 8px 8px;
  min-height: 16px;
  display: inline-flex;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;

  &:hover {
    background: #f1f2f4;
    transition: background .15s ease-in-out;
    text-transform: none;
  }
`;

const RaffleContainer = styled.div`
  font-size: 16px;
  width: 100%
  height: 31.25rem;
  margin: 0;
  display: block;
`;

const useStateFromProp = (initialValue) => {
  const [sneakerID, setSneakerID] = useState(initialValue);
  return [sneakerID, setSneakerID];
};

const ModalReleaseButton = (props) => {
  const sneaker = props;
  const [sneakerID, setSneakerID] = useStateFromProp(sneaker.sneakerID);
  const [isOpen, setIsOpen] = useState(false);
  console.log(sneaker.sneakerID, 'sneakerID in releasebutton')

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalButtonContainer>
      <ReleaseName>{sneaker.name}</ReleaseName>
      <ReleaseImage src={sneaker.image} alt={sneaker.name} />
      <ReleaseButtonContainer>
        <ReleaseButton onClick={toggleModal}>
          View Raffles
        </ReleaseButton>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <ModalHeader>
            <HeaderSpacer />
            <CloseButtonWrapper>
              <CloseButton onClick={toggleModal}>
                <MdClose />
              </CloseButton>
            </CloseButtonWrapper>
          </ModalHeader>
          <RaffleContainer>
            <Raffles id={sneakerID} />
          </RaffleContainer>
        </StyledModal>
      </ReleaseButtonContainer>
    </ModalButtonContainer>
  );
};

export default ModalReleaseButton;
