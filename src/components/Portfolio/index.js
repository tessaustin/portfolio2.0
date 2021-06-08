import React from 'react';


function Portfolio() {
    return (
        <div>
            <img
                src={require("../../assets/img/petadoption.jpg").default}
                alt="pet-adoption"
                className="screenshot"
            ></img>
            <h4>Pet Adoption</h4>
            <a            
            href="https://avamariee.github.io/pet-adoption-quiz/"
                target="_blank"
                rel="noopener noreferrer">
                <h5>App</h5>
            </a>
            <a
                href="https://github.com/avamariee/pet-adoption-quiz"
                target="_blank"
                rel="noopener noreferrer">
                <h5>Repository</h5>
            </a>
            <br></br>

            <img
                src={require("../../assets/img/notetaker.png").default}
                alt="note-taker"
                className="screenshot"
            ></img>
            <h4>Note Taker</h4>
            <a            
            href="https://desolate-sands-26527.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer">
                <h5>App</h5>
            </a>
            <a
                href="https://github.com/tessaustin/notes-on-notes"
                target="_blank"
                rel="noopener noreferrer">
                <h5>Repository</h5>
            </a>
            <br></br>

            <img
                src={require("../../assets/img/scheduler.png").default}
                alt="scheduler"
                className="screenshot"
            ></img>
            <h4>Scheduler</h4>
            <a            
            href="https://tessaustin.github.io/scheduler/"
                target="_blank"
                rel="noopener noreferrer">
                <h5>App</h5>
            </a>
            <a
                href="https://github.com/tessaustin/scheduler"
                target="_blank"
                rel="noopener noreferrer">
                <h5>Repository</h5>
            </a>
            <br></br>

            <img
                src={require("../../assets/img/forecast.png").default}
                alt="forecast"
                className="screenshot"
            ></img>
            <h4>Forecast</h4>
            <a            
            href="https://tessaustin.github.io/forecast/"
                target="_blank"
                rel="noopener noreferrer">
                <h5>App</h5>
            </a>
            <a
                href="https://github.com/tessaustin/forecast"
                target="_blank"
                rel="noopener noreferrer">
                <h5>Repository</h5>
            </a>
            <br></br>

            <img
                src={require("../../assets/img/techblog.png").default}
                alt="tech-blog"
                className="screenshot"
            ></img>
            <h4>Tech Blog</h4>
            <a            
            href="https://calm-fjord-73302.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer">
                <h5>App</h5>
            </a>
            <a
                href="https://github.com/tessaustin/MVC-tech"
                target="_blank"
                rel="noopener noreferrer">
                <h5>Repository</h5>
            </a>
            <br></br>

            <img
                src={require("../../assets/img/password.png").default}
                alt="password"
                className="screenshot"
            ></img>
            <h4>Password Generator</h4>
            <a            
            href="https://tessaustin.github.io/password-generator/"
                target="_blank"
                rel="noopener noreferrer">
                <h5>App</h5>
            </a>
            <a
                href="https://github.com/tessaustin/password-generator"
                target="_blank"
                rel="noopener noreferrer">
                <h5>Repository</h5>
            </a>
            <br></br>

            <img
                src={require("../../assets/img/budget.png").default}
                alt="budget"
                className="screenshot"
            ></img>
            <h4>Budget Tracker</h4>
            <a            
            href="https://polar-wildwood-09716.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer">
                <h5>App</h5>
            </a>
            <a
                href="https://github.com/tessaustin/budget-real-good"
                target="_blank"
                rel="noopener noreferrer">
                <h5>Repository</h5>
            </a>
        </div>
        
    )

};

export default Portfolio;