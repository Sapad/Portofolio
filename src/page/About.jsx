import React from 'react';
import Img1 from '../assets/image/file.png';
import { FaSuitcase, FaCertificate, FaBriefcase} from 'react-icons/fa';
import '../assets/css/about.css';


function About() {
  return (
    <section id='about' className='about'>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                <img src={ Img1 } alt="About" className='Image' />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                        <article className='about__card'>
                            <FaSuitcase className='about__icon'/>
                            <h5>Studi</h5>
                            <small> Mahasiswa Semester 6 di Universitas Gundarma </small>
                        </article>
                        <article className='about__card'>
                            <FaCertificate className='about__icon'/>
                            <h5>Certificate</h5>
                            <small>by Dicoding, camp404, Edspert</small>
                            <br></br>
                            <a href="https://drive.google.com/drive/folders/1JgLI7OQCKtfxLdRAsvgLKy71rTFlBhE9?usp=sharing" target='_blank' rel="noreferrer">Certifikat</a>

                            
                        </article>
                        <article className='about__card'>
                            <FaBriefcase className='about__icon'/>
                            <h5>Studi Kasus</h5>
                            <small className='href'>Website wisata sleman, rumah makan padang, dan bookstore</small>
                        </article>
                    </div>
                    <p>
                        Mahasiswa Semester 6 memiliki pengalaman membuat website HTML, CSS, Javascript, dan React JS.
                        serta memiliki Certificate pendukung dari Dicoding, Camp404, dan Edspert. 
                    </p>
                    <a href="#contact" className='btn btn-primary'>Contact</a>
            </div>
        </div>
    </section>
    )
}

export default About