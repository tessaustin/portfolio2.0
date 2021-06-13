import React from 'react';

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img
                    src={require('../../assets/img/selfie.jpg').default}
                    alt="about-me"
                    className="photo"
                />
            </div>
            <div>
                <p>
                An accomplished web developer with proficiencies in HTML, CSS, JavaScript, Node, SQL, MongoDB, React and more. 
                Able to build front-end websites from scratch as well as build efficiency within pre-existing frameworks. 
                Create full stack web applications with the full understanding of how front-end and back-end communicate. 
                Acquires the full fondational knowledge needed to be successful. 
                Has outstanding time and project management skills.
				</p>
            </div>
        </section>
    );
}

export default About;