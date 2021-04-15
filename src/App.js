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
import Profile from "./Pages/Profile";

function App(props) {
  const { isAuthenticated, isVerifying, user } = props
  console.log(isAuthenticated, isVerifying);

  if (!isVerifying) {
    return (
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
          <PrivateRoute path="/profile" component={Profile} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  } else {
    return <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
      <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
    </div>;
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