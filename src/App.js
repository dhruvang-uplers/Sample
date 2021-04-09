import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";



export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>

    </Router>
  )
}
