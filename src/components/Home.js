import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Router>
                <div className="center">
                    <div className="colors">
                        <section className="color bg-white"></section>
                        <section className="color bg-blue"></section>
                        <section className="color bg-purple"></section>
                    </div>
                    <div className="br"></div>
                    <div className="center-icon">
                        <Link to="/web" className="text1">
                            Web
                        </Link>
                        <ul className="vertical list">
                            <li className="vertical-item">
                                <Link to="/frontend">Frontend</Link>
                            </li>
                            <li className="vertical-item">
                                <Link to="/backend">Backend</Link>
                            </li>
                            <li className="vertical-item design">
                                <Link to="/design">Design</Link>
                            </li>
                        </ul>
                    </div>
                    <Switch>
                        <Route path="/frontend">frontend</Route>
                        <Route path="/backend">backend</Route>
                        <Route path="/design">design</Route>
                        <Route path="/web">web</Route>
                    </Switch>
                </div>
                <div className="footer">
                    <div className="tag">
                        <b>Web Development Never Ends.</b>
                    </div>
                    <span className="subtag">
                        UI, Frontend & more! by
                        <i> Abhishek Shandilya</i>
                    </span>
                    <span className="cta">Learn More!</span>
                </div>
            </Router>
        </>
    );
};

export default Home;
