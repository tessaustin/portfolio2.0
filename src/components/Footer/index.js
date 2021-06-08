import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://www.linkedin.com/in/tess-austin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/img/linkedin.png").default}
                        alt="LinkedIn"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://github.com/tessaustin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/img/github.png").default}
                        alt="Github"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://www.facebook.com/tess.austin/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/img/facebook.jpg").default}
                        alt="Facebook"
                        className="logo"
                    ></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;