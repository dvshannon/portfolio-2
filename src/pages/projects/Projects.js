import React from 'react';
import './style.css';
import ProjectItems from '../../components/projectItems/ProjectItems';
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends React.Component {
    render() {
        return (
            <div className="project-container">
                <ScrollAnimation animateIn='fadeInUp'>
                    <h2>Projects</h2>
                </ScrollAnimation>
                <ProjectItems />
            </div>
        )
    }
}

export default Projects;