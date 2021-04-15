import React from "react";
import Form from "../Components/date";

export default function Home(props) {
  return (
    <div>
      Home
      {/* <InfoForm displayName={props.displayName}></InfoForm> */}
      <Form displayName={props.displayName}></Form>
    </div>
  );
}
