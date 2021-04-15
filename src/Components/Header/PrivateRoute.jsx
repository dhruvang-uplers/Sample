import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, isAuthenticated, isVerify, ...rest }) {
  console.log(isAuthenticated, "isAuthenticated");
  return (
    <Route
      {...rest}
      render={(props) => {
        return isVerify ? <div /> : isAuthenticated ? <Component {...props} /> : <Redirect to='/login'></Redirect>;
      }}></Route>
  );
}
