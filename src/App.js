import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";



export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup"><Signup /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/"><Home /></Route>
      </Switch>

    </Router>
  )
}
