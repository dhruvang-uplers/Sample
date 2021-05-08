import React from "react";
import Header from "./../Header/Header";

export default function wrap(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
