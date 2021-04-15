import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, isAuthenticated, isVerify, ...rest }) {
  console.log(isAuthenticated, "isAuthenticated",rest);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isVerify ? <div /> : isAuthenticated ? <Component {...props} {...rest} /> : <Redirect to='/login'></Redirect>;
      }}></Route>
  );
}
