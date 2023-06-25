import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import '../assets/css/footer.css'
function Footer() {
  return (
    <footer>
        <a href="#Header" className='footer__logo'>Sapadi</a>
        <div className='footer__socials'>
            <a href="https://www.linkedin.com/in/sapto-adiyanto-787351207/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
            <a href="https://www.instagram.com/sap.adi28/"  target='_blank' rel="noreferrer"><BsInstagram/></a>
            <a href="https://github.com/Sapad"  target='_blank' rel="noreferrer"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Sapadi 2023 </small>
        </div>

    </footer>
    )
}

export default Footer