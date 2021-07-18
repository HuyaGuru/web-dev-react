import linkedinIcon from "../icons/icons8-linkedin.svg";

const Contact = () => {
    return (
        <div className="contact">
            <i>Contact me @:</i>
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
                    <img src={linkedinIcon} className="li-img"></img>
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
    );
};
export default Contact;
