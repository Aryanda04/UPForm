import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const LayoutComponent = (props) => {
  return (
    <>
      <Navbar />
      <Sidebar/>
      <div>{props.content}</div>
    </>
  );
};
export default LayoutComponent;
