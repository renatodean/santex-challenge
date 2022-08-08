import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerAnimation = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 8px solid grey;
  border-right: 8px solid grey;
  border-bottom: 8px solid grey;
  border-left: 8px solid black;
  background: transparent;
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Spinner = () => (
  <SpinnerWrapper data-testid="spinner">
    <SpinnerAnimation />
  </SpinnerWrapper>
);

export default Spinner;
