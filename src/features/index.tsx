import React from "react";
import { Apartment1 } from "../features/apartment_1";
import { Apartment2 } from "../features/apartment_2";
import styled from "styled-components";

const StyledPickerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const StyledApartment_1 = styled.div`
  grid-column: 1/2;
  background-color: blue;
`;

const StyledApartment_2 = styled.div`
  grid-column: 4/5;
  background-color: blue;
`;

const StyApartment1 = styled(Apartment1)`
  grid-column: 2/3;
`;

const StyApartment2 = styled(Apartment2)`
  color: violet;
`;

/*<StyledApartment_1>
  <Apartment_1 />
</StyledApartment_1>*/

export const Apartman_1 = () => {
  return (
    <StyledPickerButton>
      <StyledApartment_1>
        <Apartment1 />
      </StyledApartment_1>
      <StyledApartment_2>
        <Apartment2 />
      </StyledApartment_2>
    </StyledPickerButton>
  );
};

export default Apartman_1;
