import React from 'react';
import Projects from '../../pages/projects/Projects';
import Footer from '../../components/footer/Footer';
import './style.css';


function Landing() {
    return (
        <div className="landing">
            <div className="jumbotron">
            <div className="jumbo-text">
                <h1>Deyon Shannon</h1>
                <h1 className='lighter-text'>Front End Developer</h1>
            </div>
                <div id="bg1"></div>
                <div id="bg2"></div>
                <div className="social-links">
                    <a href='https://github.com/dvshannon/' target="_blank" rel='noopener noreferrer'><i class="fab fa-github"></i><p>Github</p></a>

                    <a href='https://www.linkedin.com/in/deyon-shannon-b911a9141/' target="_blank" rel='noopener noreferrer'><i class="fab fa-linkedin"></i>
                    <p>LinkedIn</p></a>
                    <a href="https://docs.google.com/document/d/1eG-goApv7byGyFCrOmrW6t8dLFWiJY7jC3eryaPlTCA/edit?usp=sharing" target='_blank' rel='noopener noreferrer'><i class="fas fa-file"></i>
                    <p>Resume</p></a>
                    <div className="cta">
                        <div className='cta-text'>Scroll Down to See Projects</div>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div className="projects">
                <Projects />
            </div>
            <Footer />
        </div>
    )
}

export default Landing;