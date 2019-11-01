import React from "react";

export const ApartmentFull = (props: any) => {
  return (
    <div>
      <div>{props.location.state.granica}</div>
      <div>In progress</div>
    </div>
  );
};

export default ApartmentFull;
