import * as React from "react";
import { Sidebar } from "./components/Sidebar";
import { ContentView } from "./components/ContentView";
import styles from "./style/layout.module.css";
import styled from "styled-components";
import { Apartman_1 } from "../features/index";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 6fr 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 7fr 0.1fr 7fr 0.5fr;
`;

const StyledApartment_1 = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
`;

const StyledApartment_2 = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;
  
`;

const StyledApartment_3 = styled.div`
  grid-column: 3/4;
  grid-row: 5/6;
  
`;

export const Layout = (props: any) => {
  return (
    <StyledContainer>
      <StyledApartment_1>
        <Sidebar />
      </StyledApartment_1>
      <StyledApartment_2>
        <Apartman_1 />
      </StyledApartment_2>
      <StyledApartment_3>
        <Apartman_1 />
      </StyledApartment_3>
    </StyledContainer>
  );
};

/*export const Layout = (props: any) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <StyledContainer>
          <StyledApartment_1>
            <Sidebar />
          </StyledApartment_1>
          <StyledApartment_2>
            <Apartman_1 />
           <ContentView router={props.router} />
          </StyledApartment_2>
        </StyledContainer>
 </div>
    </div>
  );
};*/
