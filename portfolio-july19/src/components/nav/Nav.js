import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Nav () {

    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if(prevScrollPos > currentScrollPos) {
            document.getElementById('navbar').style.top = '0';
            document.getElementById('navbar').style.opacity = '1';
        } else {
            document.getElementById('navbar').style.top = '-100px';
            document.getElementById('navbar').style.opacity = '0.6';
        }
        prevScrollPos = currentScrollPos;
    }
    return (
        <div id="navbar">
            <a href='https://github.com/dvshannon/' target="_blank" rel='noopener noreferrer'>Github</a>
            <a href='https://www.linkedin.com/in/deyon-shannon-b911a9141/' target="_blank" rel='noopener noreferrer'>LinkedIn</a>
            <span>Deyon Shannon</span>
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>About Me</Link>
        </div>
    )
}

export default Nav;