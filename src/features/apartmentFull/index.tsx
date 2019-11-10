import React, { useState } from "react";
import DatePicker from "react-date-picker";
import styled from "styled-components";
import { Label } from "../../ui/label";
import TextInput from "../../ui/textInput";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.05fr 1fr 2fr 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 1fr 1fr 1fr 1fr 1fr;
`;

const StyledCalendarFrom = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
`;

const StyledCalendarTo = styled.div`
  grid-column: 4/5;
  grid-row: 3/4;
  @media screen and (max-width: 600px) {
    grid-column: 2/3;
    grid-row: 4/5;
  }
`;

const StyledForm = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;
  @media screen and (max-width: 600px) {
    grid-column: 2/6;
    grid-row: 5/6;
  }
`;

const StyledDates = styled.div`
  grid-column: 2/5;
  grid-row: 6/7;
  @media screen and (max-width: 600px) {
    grid-column: 2/6;
    grid-row: 6/7;
  }
`;

type TProps = {
  /** value value says is ToggleSwitch is turned off or on */
  value: boolean;
  /** disabled value says is ToggleSwitch disabled ot enabled */
  disabled: boolean;
  /** onChange does something */
  onChange: (value: any) => any;
};

export const ApartmentFull = (props: any) => {
  // Ovo nije dobro rješenje, treba biti van funkcije
  const StyledHeader = styled.div`
    grid-column: 1/8;
    grid-row: 1/2;
    background-color: ${props.location.state.color};
    color: white;
    text-align: center;
    line-height: 80px;
  `;

  // destructuring: varijable datumi "Od" i "Do", funkcije za postavljanje novih vrijednosti
  const [dateFrom, setDateFrom] = useState({ date: new Date() });
  const [dateTo, setDateTo] = useState({ date: new Date() });
  let fromDates = [];
  let fromDatesShow;
  let toDates = [];
  let toDatesShow;
  const [formValue, setFormValue] = useState({ value: "" });
  const [guest, setGuest] = useState("Nepoznat");

  // funkcija koja postavlja novi datum "Od"
  const changeDateFrom = (date: any) => {
    setDateFrom({ date });
  };

  // funkcija koja postavlja novi datum "Do"
  const changeDateTo = (date: any) => {
    setDateTo({ date });
  };

  // dodaje odabrani datum "Od" u niz
  fromDates.push(dateFrom);
  fromDatesShow = fromDates.map(i => i.date.toLocaleDateString("hr-HR"));

  // dodaje odabrani datum "Do" u niz
  toDates.push(dateTo);
  toDatesShow = toDates.map(i => i.date.toLocaleDateString("hr-HR"));

  const handleSubmit = (event: any) => {
    setGuest(formValue.value);
    console.log("form value: " + formValue.value);
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    setFormValue({ value: event.target.value });
  };

  return (
    <div>
      <StyledContainer>
        <StyledHeader>{props.location.state.granica}</StyledHeader>
        <StyledCalendarFrom>
          <div>Datum od: </div>
          <DatePicker
            onChange={changeDateFrom}
            value={dateFrom.date}
            locale="hr-HR"
          />
        </StyledCalendarFrom>

        <StyledCalendarTo>
          <div>Datum do: </div>
          <DatePicker
            onChange={changeDateTo}
            value={dateTo.date}
            locale="hr-HR"
          />
        </StyledCalendarTo>

        <StyledForm>
          <TextInput value={formValue.value} onChange={handleChange} />

          <button onClick={handleSubmit}>Dodaj</button>
        </StyledForm>

        <StyledDates>
          <div>Gost: {guest}</div>
          <br />
          <div>
            Datumi: {fromDatesShow} &rarr; {toDatesShow}
          </div>
        </StyledDates>
        <Label>fdgdf</Label>
      </StyledContainer>
    </div>
  );
};

export default ApartmentFull;
