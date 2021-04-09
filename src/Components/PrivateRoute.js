import React from "react";
import { Redirect, Route } from "react-router-dom";
import Store from "../Redux/Store";

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = Store.getState().AuthReducer
    console.log("currentUser", currentUser);

    return (
        <div>
            <Route
                {...rest}
                render={(props) => {
                    return currentUser ? (
                        <Component {...props} />
                    ) : (
                            <Redirect to="/login" />
                        );
                }}
            ></Route>
        </div>
    );
}
