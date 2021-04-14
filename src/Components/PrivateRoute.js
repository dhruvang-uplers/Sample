import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, isAuthenticated, isVerifying, ...rest }) {
    console.log(isAuthenticated, isVerifying);

    return (
        <div>
            <Route
                {...rest}
                render={(props) => {
                    return isVerifying ? (
                        <div />
                    ) : isAuthenticated ? (
                        <Component {...props} />
                    ) : (<Redirect to="/login" />);
                }}
            ></Route>
        </div>
    );
}
