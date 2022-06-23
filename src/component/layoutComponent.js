import React from "react";
import Navbar from "./navbar";

const LayoutComponent = (props) => {
  return (
    <>
      <Navbar />
      <div>{props.content}</div>
    </>
  );
};
export default LayoutComponent;
