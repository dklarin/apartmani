import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { ContentView } from "./components/ContentView";
import styles from "./style/layout.module.css";
import styled from "styled-components";

import { quiz } from "../data/base";
import { Apartment1 } from "../features/apartmentSmall/index";

import { NavLink } from "react-router-dom";
//import { Switch, Route } from "react-router-dom";
//import { ApartmentFull } from "../features/apartmentFull/index";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import ApartmentFull from "../features/apartmentFull/index";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 3fr 0.03fr 3fr 1fr;
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
  grid-column: 5/6;
  grid-row: 3/4;
`;

const StyledApartment_4 = styled.div`
  grid-column: 3/4;
  grid-row: 5/6;
`;

const StyledApartment_5 = styled.div`
  grid-column: 5/6;
  grid-row: 5/6;
`;

export const Layout = (props: any) => {
  const question = quiz.questions;
  //const [granica, setGranica] = useState("Danijel");
  console.log(props);

  return (
    <StyledContainer>
      <StyledApartment_1></StyledApartment_1>

      <StyledApartment_2>
        <Link
          to={{
            pathname: "/apartModri/",
            state: {
              granica: question[0].answers.A,
              color: question[0].answers.C
            }
          }}
        >
          <Apartment1
            children={question[0].answers.A}
            src={question[0].answers.B}
            onClick={ApartmentFull}
          />
        </Link>
      </StyledApartment_2>

      <StyledApartment_3>
        <Link
          to={{
            pathname: "/apartSmedji/",
            state: {
              granica: question[1].answers.A,
              color: question[1].answers.C
            }
          }}
        >
          <Apartment1
            children={question[1].answers.A}
            src={question[1].answers.B}
          />
        </Link>
      </StyledApartment_3>
      <StyledApartment_4>
        <Apartment1
          children={question[2].answers.A}
          src={question[1].answers.B}
        />
      </StyledApartment_4>
      <StyledApartment_5>
        <Apartment1
          children={question[3].answers.A}
          src={question[0].answers.B}
        />
      </StyledApartment_5>
    </StyledContainer>
  );
};
