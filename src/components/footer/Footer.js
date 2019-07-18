import React from 'react';
import './style.css';

function Footer() {
    return (
        <footer>
            <div className="footer-center">
                &copy; 2019 Deyon Shannon
                <a href='https://github.com/dvshannon/' target="_blank" rel='noopener noreferrer'><i class="fab fa-github"></i></a>

                <a href='https://www.linkedin.com/in/deyon-shannon-b911a9141/' target="_blank" rel='noopener noreferrer'><i class="fab fa-linkedin"></i></a>
                <a href="https://docs.google.com/document/d/1eG-goApv7byGyFCrOmrW6t8dLFWiJY7jC3eryaPlTCA/edit?usp=sharing" target='_blank' rel='noopener noreferrer'><i class="fas fa-file"></i></a>
            </div>
        </footer>
    )
}

export default Footer;