import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home"

import "../style/main.css";
import image from "../images/lappy.jpg";

const App = () => {
    return (
        <div className="container">
            <Router>
                <div className="header">
                    <section className="logo">
                        <Link to="/">
                            <b className="logo-text">Web Dev</b>
                        </Link>
                    </section>
                    <nav className="nav">
                        <ul className="nav-list list">
                            <li className="nav-list-item">
                                <Link to="/what-is-this">What is this</Link>
                            </li>
                            <li className="nav-list-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route path="/what-is-this">
                        what is this
                    </Route>
                    <Route path="/contact">
                        contact
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
