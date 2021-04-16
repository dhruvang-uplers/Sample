import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/Header/PrivateRoute";
import View from "./Components/View";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { VerifyUser } from "./Redux/ActionCreator";

const App = (props) => {
  const { isAuthenticated, isVerify } = props;

  useEffect(() => {
    // props.VerifyUser();
  }, []);
  console.log(isAuthenticated, isVerify, " isAuthenticated, isVerifying");
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        {/* <Route path='/login' render={() => ( !this.state.isLoggedIn ? <Login /> : <Redirect to='/user-profile' /> )}/> */}
        <PrivateRoute
          exact
          path='/about'
          component={About}
          isAuthenticated={isAuthenticated}
          isVerify={isVerify}
        />
        <PrivateRoute
          exact
          path='/contact'
          component={Contact}
          isAuthenticated={isAuthenticated}
          isVerify={isVerify}
        />
        <PrivateRoute
          exact
          path='/'
          component={Home}
          isAuthenticated={isAuthenticated}
          isVerify={isVerify}
          displayName={props.displayName}
        />
        <PrivateRoute
          path='/view/:id'
          component={View}
          isAuthenticated={isAuthenticated}
          isVerify={isVerify}
        /> 
        
      </Switch>
    </Router>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.isLoggingIn,
    loginError: state.isLoginError,
    isAuthenticated: state.isAuthenticated,
    isVerify: state.isVerify,
    displayName: state.user.displayName,
  };
};

export default connect(mapStateToProps, { VerifyUser })(App);
