import React from 'react';
import GoT from '../../../src/img/remember-got.png';
import CrystalGame from '../../../src/img/crystal-collector.png';
import TrickMember from '../../../src/img/trickmember.png';
import './style.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

function ProjectItems() {
    return (
    <div className="project-grid">
        <ScrollAnimation animateIn='slideInLeft'>
            <div className="project-item">
                <h3>Remember The Throne is a memory game that requires you to click on the characters in the show. Be weary of clicking on the same character or else you will know nothing!</h3>
                <img src={GoT} alt='Remember The Throne'/>
                <div className="project-buttons">
                    <a href="https://github.com/dvshannon/remember-the-throne">View Code</a>
                    <a href="https://dvshannon.github.io/remember-the-throne/">Demo</a>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInRight'>
            <div className="project-item">
                <h3>Trickmember is an app that provides a simple input system to help skaters remember what tricks they have done.</h3>
                <img src={TrickMember} alt='Trickmember'/>
                <div className="project-buttons">
                    <a href="https://github.com/dvshannon/remember-the-throne">View Code</a>
                    <a href="https://dvshannon.github.io/remember-the-throne/">Demo</a>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInLeft'>
            <div className="project-item">
                <h3>This game brings a challenge to the user by forcing random numbers onto crystal values. The user is then to decipher how to reach the target score that can be found at the top of the container and not go over the target value.</h3>
                <img src={CrystalGame} alt='Crystal Collector Game'/>
                <a href="https://github.com/dvshannon/remember-the-throne">View Code</a>
                    <a href="https://dvshannon.github.io/remember-the-throne/">Demo</a>
            </div>
        </ScrollAnimation>
    </div>
    )
}

export default ProjectItems;