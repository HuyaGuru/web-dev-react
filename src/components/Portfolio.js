import linkedinIcon from "../icons/icons8-linkedin.svg";

const Portfolio = () => {
    return (
        <div className="flex-container">
            <div className="portfolio">
            <b className="fs-3">Abhishek Shandilya</b>
            <br/>
            <br/>
                <b className="fs-1-5 hv-ul">About:</b>
                <p>
                    <br />
                    Effective at supporting team needs with high-quality code,
                    subject matter expertise and collaboration skills. Skilled
                    programmer and complex problem-solver experienced in
                    programming.
                    <br />
                    <br />
                    <br />
                </p>
                <b className="fs-1-5 hv-ul">Technical Skills:</b>
                <ul>
                    <li>
                        <p>React.js</p>
                    </li>
                    <li>
                        <p>CSS</p>
                    </li>
                    <li>
                        <p>HTML</p>
                    </li>
                    <li>
                        <p>Vanilla Javascript</p>
                    </li>
                    <li>
                        <p>Python</p>
                    </li>
                </ul>
                <br />
                <b className="fs-1-5 hv-ul">Other Skills:</b>
                <ul>
                    <li>
                        <p>Can Read and Understand C/C++ & Core Java.</p>
                    </li>
                    <li>
                        <p>Analytical & Critical Thinking.</p>
                    </li>
                    <li>
                        <p>Excellent Programming Logic.</p>
                    </li>
                    <li>
                        <p>Problem Solving Approach.</p>
                    </li>
                    <li>
                        <p>Quick Learner.</p>
                    </li>
                    <li>
                        <p>Excellent Written & Spoken Skills.</p>
                    </li>
                    <li>
                        <p>Curiosity & Desire to learn.</p>
                    </li>
                </ul>
                <br />
                <b className="fs-1-5 hv-ul">Operating Systems:</b>
                <ul>
                    <li>
                        <p>Linux</p>
                    </li>
                    <li>
                        <p>Windows</p>
                    </li>
                </ul>
                <br />
                <b className="fs-1-5 hv-ul">Languages:</b>
                <ul>
                    <li>
                        <p>English</p>
                    </li>
                    <li>
                        <p>Hindi</p>
                    </li>
                </ul>
                <br />
                <b className="fs-1-5 hv-ul">Experience:</b>
                <ul>
                    <li>
                        <p>Fresher</p>
                    </li>
                </ul>
                <br />
                <b className="fs-1-5 hv-ul">Education:</b>
                <br />
                <br />
                <b className="light-text">04/2012- 07/2015</b>
                <ul>
                    <li>
                        <p>
                            <b>
                                <i>10th</i>
                            </b>
                            <br />
                            Siddharth International Public School, Sahibabad,
                            Ghaziabad.
                            <br />
                            Graduated with 8.6 CGPA
                        </p>
                    </li>
                </ul>
                <br />
                <b className="light-text">08/2015- 08/2017</b>
                <ul>
                    <li>
                        <p>
                            <b>
                                <i>12th</i>
                            </b>
                            <br />
                            Sarvaodaya Bal Vidyalaya, Vivek Vihar, New Delhi.
                            <br />
                            PCM + Eng. Drawing + English + Physical Education
                        </p>
                    </li>
                </ul>
                <br />
                <b className="light-text">08/2018-Current</b>
                <ul>
                    <li>
                        <p>
                            <b>
                                <i>Bachelor of Computer Applications (BCA)</i>
                            </b>
                            <br />
                            Modern College of Professional Studies, Mohan Nagar,
                            Ghaziabad. Awaiting results for the last two
                            semesters. No Backlogs.
                        </p>
                    </li>
                </ul>
                <br/>
                <Contact inPage={"yes"} />
            </div>
        </div>
    );
};
const Contact = (props) => {
    let classname;
    let classname2
    if (props.inPage !== "yes") {
        classname = "contact";
        classname2 = "flex-container"
    }
    return (
        <div className={classname2}>
            <div className={classname}>
                <b className="fs-1-5 hv-ul">Contact me @:</b>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Email:</b>&nbsp;
                            <a
                                className="special-link"
                                href="abhishekshandilya640@gmail.com"
                            >
                                abhishekshandilya640@gmail.com
                            </a>
                        </p>
                    </li>
                    <br />
                    <li className="contact-li">
                        <img
                            src={linkedinIcon}
                            className="li-img"
                            alt="linkedin-icon"
                        ></img>
                        <b>:</b>&nbsp;
                        <a
                            className="special-link li-a"
                            href="https://www.linkedin.com/in/abhishek-shandilya-712a7a211"
                        >
                            Abhishek Shandilya
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export { Contact };
export default Portfolio;
