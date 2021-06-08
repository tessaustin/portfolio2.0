import React from "react";

function Resume() {
    return (
        <section>
            <div className="file">
                <a href={require("../../assets/file/resume.pdf").default} download>
                    <h1>My Resume</h1>
                </a>
            </div>
            <div>
                <h3>Proficiencies</h3>
                <ol>
                    <li>HTML/CSS/Git</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>The DOM</li>
                    <li>APIs</li>
                    <li>JQuery</li>
                    <li>JSON</li>
                    <li>AJAX</li>
                    <li>Node</li>
                    <li>ES6</li>
                    <li>Object-Oriented Programming</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MVC Paradigm</li>
                    <li>Sequelize</li>
                    <li>Testing</li>
                    <li>Agile Development</li>
                    <li>Progressive Web Apps</li>
                    <li>React</li>
                    <li>NoSQL</li>
                    <li>MERN Stack</li>
                    <li>Computer Science Fundamentals </li>
                </ol>
            </div>
        </section>
    );
}

export default Resume;