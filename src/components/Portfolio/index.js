import React from 'react';


function Portfolio() {
    return (
        <div>
            <img
                src={require("../../assets/img/notetaker.png").default}
                alt="notetaker"
                className="screenshot"
            ></img>
            <a            
            href="https://desolate-sands-26527.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer">
                <h5>Note Taker App</h5>
            </a>
            <a
                href="https://github.com/tessaustin/notes-on-notes"
                target="_blank"
                rel="noopener noreferrer">
                <h5>Note Taker Repository</h5>
            </a>
        </div>
    )

};

export default Portfolio;