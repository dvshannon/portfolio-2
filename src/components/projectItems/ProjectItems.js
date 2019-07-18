import React from 'react';
import GoT from '../../../src/img/remember-got.png';
import CrystalGame from '../../../src/img/crystal-collector.png';
import TrickMember from '../../../src/img/trickmember.png';
import onBoard from '../../../src/img/onBoard.png';
import Index from '../../../src/img/indexBookSearch.png';
import PlayDate from '../../../src/img/playDate.png';
import './style.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

function ProjectItems() {
    return (
    <div className="project-grid">
        <ScrollAnimation animateIn='slideInRight'>
            <div className="project-item">
                <h3>Index takes in the users input and finds a book based off of their search. Users can save their searches simply by pressing the save button next to the book they choose.</h3>
                <img src={Index} alt='Index'/>
                <div className="project-buttons">
                    <a href="https://github.com/dvshannon/index" target='_blank' rel='noopener noreferrer'>View Code</a>
                    <a href="https://index-spa.herokuapp.com/" target='_blank' rel='noopener noreferrer'>Demo</a>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInLeft'>
            <div className="project-item">
                <h3>PlayDate give users the opportunity to meet other people and their dogs! This app can be used as a simple way to meet new friends or look for dates. </h3>
                <img src={PlayDate} alt="PlayDate"/>
                <div className="project-buttons">
                    <a href="https://github.com/bryvl/project-2" target='_blank' rel='noopener noreferrer'>View Code</a>
                    <a href="https://gentle-forest-99048.herokuapp.com/#/" target='_blank' rel='noopener noreferrer'>Demo</a>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInRight'>
            <div className="project-item">
                <h3>onBoard creates a platform for people to get together and play board games.</h3>
                <img src={onBoard} alt='onBoard'/>
                <div className="project-buttons">
                    <a href="https://github.com/gpiercelusk/onBoard" target='_blank' rel='noopener noreferrer'>View Code</a>
                    <a href="https://quiet-fortress-68299.herokuapp.com/" target='_blank' rel='noopener noreferrer'>Demo</a>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInLeft'>
            <div className="project-item">
                <h3>Remember The Throne is a memory game that requires you to click on the characters in the show. Be weary of clicking on the same character or else you will know nothing!</h3>
                <img src={GoT} alt='Remember The Throne'/>
                <div className="project-buttons">
                    <a href="https://github.com/dvshannon/remember-the-throne" target='_blank' rel='noopener noreferrer'>View Code</a>
                    <a href="https://dvshannon.github.io/remember-the-throne/" target='_blank' rel='noopener noreferrer'>Demo</a>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInRight'>
            <div className="project-item">
                <h3>Trickmember is an app that provides a simple input system to help skaters remember what tricks they have done.</h3>
                <img src={TrickMember} alt='Trickmember'/>
                <div className="project-buttons">
                    <a href="https://github.com/dvshannon/slides-grinds" target='_blank' rel='noopener noreferrer'>View Code</a>
                    <a href="https://dvshannon.github.io/Slides-Grinds/" target='_blank' rel='noopener noreferrer'>Demo</a>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInLeft'>
            <div className="project-item">
                <h3>This game brings a challenge to the user by forcing random numbers onto crystal values. The user is then to decipher how to reach the target score that can be found at the top of the container and not go over the target value.</h3>
                <img src={CrystalGame} alt='Crystal Collector Game'/>
                <a href="https://github.com/dvshannon/unit-4-game" target='_blank' rel='noopener noreferrer'>View Code</a>
                    <a href="https://dvshannon.github.io/unit-4-game/" target='_blank' rel='noopener noreferrer'>Demo</a>
            </div>
        </ScrollAnimation>
    </div>
    )
}

export default ProjectItems;