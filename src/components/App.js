import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";
import { Contact } from "./Portfolio";

import "../style/main.css";
import contactIcon from "../icons/contact_support_black_24dp.svg";
import portfolioIcon from "../icons/contact_page_black_24dp.svg";

const App = () => {
    return (
        <div className="container">
            <Router>
                <div className="header">
                    <section className="logo">
                        <Link to="/">
                            <b className="logo-text">Home</b>
                        </Link>
                    </section>
                    <nav className="nav">
                        <ul className="nav-list list">
                            <li className="nav-list-item ">
                                <Link to="/portfolio">
                                    <p className="nav-contact">
                                        <img
                                            src={portfolioIcon}
                                            className="nav-contact-icon"
                                            alt="contact-icon"
                                        />
                                        &nbsp; Portfolio
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-list-item ">
                                <Link to="/contact">
                                    <p className="nav-contact">
                                        <img
                                            src={contactIcon}
                                            className="nav-contact-icon"
                                            alt="contact-icon"
                                        />
                                        &nbsp; Contact
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
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
