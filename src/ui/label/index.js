import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin-bottom: ${props => (props.size === "l" ? "8px" : "2px")};
  font-size: ${props =>
    props.size === "s"
      ? "0.7rem"
      : props.size === "m"
      ? "0.8rem"
      : props.size === "l"
      ? "1.2rem"
      : "0.9rem"};
  font-weight: 600;
`;
/***
 * The component
 */
export const Label = props => {
  return <StyledLabel {...props} />;
};

Label.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"])
};
