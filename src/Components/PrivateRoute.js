import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component: Component, isAuthenticated, isVerifying, ...rest }) {
    console.log(rest);
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


function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated,
        isVerifying: state.AuthReducer.isVerifying
    };
}
export default connect(mapStateToProps)(PrivateRoute);
