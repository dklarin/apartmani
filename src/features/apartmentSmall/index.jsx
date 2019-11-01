import React from "react";
import styled from "styled-components";
import image from "../../data/preuzmi.png";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 4fr 3fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 350px;
  background: whitesmoke;
  border-style: dotted;
  border-width: 1px;
  &:hover {
    background-color: orange;
    transform: scale(1.03);
  }
`;

const StyledImage = styled.img`
  grid-column: 2/3;
  grid-row: 2/3;
`;

const StyledDiv = styled.div`
  grid-column: 4/5;
  grid-row: 2/3;
`;

export const Apartment1 = props => {
  const { children, src } = props;

  return (
    <StyledContainer>
      <StyledImage src={src} />
      <StyledDiv children={children} />
    </StyledContainer>
  );
};

export default styled(Apartment1);
