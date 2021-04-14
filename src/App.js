import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";

function App(props) {
  const { isAuthenticated, isVerifying, user } = props
  console.log(isAuthenticated, isVerifying);

  if (!isVerifying) {
    return (
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  } else {
    return false;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated,
    isVerifying: state.AuthReducer.isVerifying,
    user: state.AuthReducer.user
  };
}
export default connect(mapStateToProps)(App)