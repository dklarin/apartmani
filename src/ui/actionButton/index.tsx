import React, { useState } from "react";
import styled from "styled-components";
import { type } from "os";

//import { PushSpinner } from "react-spinners-kit";

const Spinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="8"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  text-align: left !important;

  width: 15px;
  height: 15px;
  position: relative;
  right: 2%;

  & .path {
    stroke: white;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const StyledActionLoader = styled.button`
  width: auto;
  height: auto;
  text-align: center;

  border: none;
  color: white;
  padding: auto;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: auto;
  cursor: pointer;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :hover {
    background-color: #173b67;
  }
`;

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

type PropType = {
  isBusy: boolean;
  onClick: any;
  loadingContent: string;
  children?: any;
};

export const ActionButton = (props: PropType) => {
  const { isBusy, onClick } = props;

  return (
    <Container>
      <StyledActionLoader onClick={onClick}>
        {isBusy ? (
          <span>
            <Spinner />
            <span>{props.loadingContent}</span>
          </span>
        ) : (
          <span>{props.children}</span>
        )}
      </StyledActionLoader>
    </Container>
  );
};

export default ActionButton;
