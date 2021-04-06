import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Bugs from "./Pages/Bugs";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/bugs">Bugs</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/bugs">
            <Bugs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
