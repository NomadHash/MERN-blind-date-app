import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import WhiteBoard from '../common/WhiteBoard';

const MainBlock = styled(Responsive)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Board = styled(WhiteBoard)`
  width: 30%;
  margin-top: 3.5rem;
`;

const Main = () => {
  return (
    <MainBlock>
      <Board title="Lorem ipsum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Board>
      <Board title="Lorem ipsum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Board>
      <Board title="Lorem ipsum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Board>
      <Board title="Lorem ipsum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Board>
      <Board title="Lorem ipsum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Board>
      <Board title="Lorem ipsum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Board>
    </MainBlock>
  );
};

export default Main;
