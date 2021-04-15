import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import { connect } from "react-redux";
import { useEffect } from "react";
import { VerifyUser } from "./Redux/ActionCreator";
import PrivateRoute from "./Components/Header/PrivateRoute";

const App = (props) => {
  const { isAuthenticated, isVerify } = props;

  useEffect(() => {
    // props.VerifyUser();
  }, []);
  console.log(isAuthenticated, isVerify, " isAuthenticated, isVerifying");
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        {/* <Route path='/login' render={() => ( !this.state.isLoggedIn ? <Login /> : <Redirect to='/user-profile' /> )}/> */}
        <PrivateRoute exact path='/about' component={About} isAuthenticated={isAuthenticated} isVerify={isVerify} />
        <PrivateRoute exact path='/contact' component={Contact} isAuthenticated={isAuthenticated} isVerify={isVerify} />
        <PrivateRoute exact path='/' component={Home} isAuthenticated={isAuthenticated} isVerify={isVerify} />
      </Switch>
    </Router>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isLoggingIn: state.isLoggingIn,
    loginError: state.isLoginError,
    isAuthenticated: state.isAuthenticated,
    isVerify: state.isVerify,
  };
};

export default connect(mapStateToProps, { VerifyUser })(App);
