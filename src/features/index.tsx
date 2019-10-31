import React from "react";
import { Apartment1 } from "../features/apartment_1";
import { Apartment2 } from "../features/apartment_2";
import styled from "styled-components";

//Daniječl

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 0.5fr 0.5fr 6fr 1fr;
  grid-template-rows: 0.4fr 5fr 0.4fr;
`;

const StyledApartment_1 = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  border-style: dotted;
  border-width: 1px;
  &:hover {
    background-color: yellow;
    transform: scale(1.1);
  }
`;

const StyledApartment_2 = styled.div`
  grid-column: 5/6;
  grid-row: 2/3;
  border-style: dotted;
  border-width: 1px;
`;

/*<StyledApartment_1>
  <Apartment_1 />
</StyledApartment_1>*/

export const Apartman_1 = () => {
  return (
    <StyledContainer>
      <StyledApartment_1>
        <Apartment1 />
      </StyledApartment_1>
      <StyledApartment_2>
        <Apartment2 />
      </StyledApartment_2>
    </StyledContainer>
  );
};

export default Apartman_1;
