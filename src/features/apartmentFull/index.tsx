import React from "react";

export const ApartmentFull = (props: any) => {
  //const { foo } = props.location.pathname;

  //console.log("props:" + props.myProp);
  //console.log("Props: " + props.location.state);
  console.log("Props: " + props.location.state.granica);
  return (
    <div>
      <div>{props.location.state.granica}</div>
      <div>In progress</div>
    </div>
  );
};

export default ApartmentFull;
