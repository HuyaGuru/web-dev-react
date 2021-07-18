import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";

import "../style/main.css";
import contactIcon from "../icons/contact_support_black_24dp.svg";
// import image from "../images/lappy.jpg";

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
                            <li className="nav-list-item ">
                                <Link to="/contact">
                                    <p className="nav-contact">
                                        Contact &nbsp;{" "}
                                        <img
                                            src={contactIcon}
                                            className="nav-contact-icon"
                                            alt="contact-icon"
                                        ></img>
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route path="/contact">
                        <Contact />
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
