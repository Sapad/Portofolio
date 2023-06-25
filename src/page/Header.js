import React from "react";
import '../assets/css/header.css';
import CV from '../assets/doc/CV.pdf'

const Header = () => {
  return (
    <div className="header-wraper" id="Header">
        <div className="main-info">
            <h1>Sapto Adiyanto</h1>
                <h3>
                Mahasiswa Semester 6, React JS, HTML, CSS, Javascript, Bootstrap
                </h3>
           <a href={CV} className="btn-main-offer" download>Download CV</a>
        </div>
    </div>
    );
}

export default Header