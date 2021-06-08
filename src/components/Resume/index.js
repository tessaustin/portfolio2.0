import React from "react";

function Resume() {
    return (
        <section>
            <div className="bottom-spacing">
                <a href={require("../../assets/file/resume.pdf").default} download>
                    <h4>My Resume</h4>
                </a>
            </div>
        </section>
    );
}

export default Resume;