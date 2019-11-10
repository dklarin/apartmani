import React from "react";
import styled from "styled-components";
import theme from "../theme";

export const StyledInput = styled.input`
  color: inherit;
  position: relative;
  width: ${props => props.width || "auto"};
  background-color: ${theme.inputBackgroundColor};
  border-radius: ${theme.borderRadius};
  border: 1px solid ${theme.borderColor};
  outline: none;
  padding: ${props => theme.inputPadding};
  padding-left: ${props => (props.icon ? "2.5rem" : theme.inputPadding)};
  color: ${theme.color};
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-size: 1.5rem 1.5rem;
  background-position: 0.5rem 50%;
  &:hover:not([readonly]) {
    border-color: ${theme.borderHoverColor};
  }
  &:focus {
    border-color: ${theme.borderFocusColor};
    box-shadow: ${theme.borderFocusBoxShadow};
  }
  &::placeholder {
    color: ${theme.placeholderColor};
  }
  &:readonly {
  }
  &:hover {
    border-color: ${theme.borderHoverColor};
  }
`;

export const TextInput = props => {
  return (
    <StyledInput
      {...props}
      ref={props.inputRef}
      autoCorrect="off"
      autoComplete="off"
      spellCheck={false}
    />
  );
};
export default TextInput;
