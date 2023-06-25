import React from 'react'
import '../assets/css/project.css'
import IMG from '../assets/image/Sleman.png'
import IMG1 from '../assets/image/Vue.png'
import IMG2 from '../assets/image/ReactJS.png'

function MyProject() {
  return (
    <section className="portofolio" id='Myproject'>
        <h2 className='project'>My Project</h2>
            <div className="container portofolio__container">
                    <article className='portofolio__item' id='sleman'>
                        <div className="portofolio__item-image">
                        
                        <img align="middle" src={IMG} className='image' alt="latihan" />
                        </div>
                            <h5 className="card-title">Wisata Sleman DIY</h5>
                            <p className="card-text">Wisata Sleman terdiri dari museum gunung berapi. Tempat ini memiliki ruangan dan simulasi gunung merapi yang meletus pada tahun 2010.</p>
                        <div className="portofolio__item-cta">
                            <a href="https://github.com/Sapad/WisataSleman" className='btn btn-warning'target='_blank' rel="noreferrer">Github</a>
                            <a href="https://wisatasleman.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Website</a>
                        </div>
                    </article>
                    <article className='portofolio__item' id='padang'>
                        <div className="portofolio__item-image">
                            <img src={IMG1} className='image' alt="latihan" />
                        </div>
                            <h5>Bookstore</h5>
                            <p>Manajemen buku Create, Read, Update dan Delete menggunakan vue. Membuat website hanya tampilan tanpa menggunakan database.</p>
                        <div className="portofolio__item-cta">
                            <a href="https://github.com/Sapad/vue" className='btn btn-warning' target='_blank' rel="noreferrer">Github</a>
                            <a href="https://bookstorevue.netlify.app/" className='btn btn-primary'target='_blank' rel="noreferrer">Website</a>
                        </div>
                    </article>
                    <article className='portofolio__item' id='bookstore'>
                        <div className="portofolio__item-image">
                            <img src={IMG2} className='image' alt="latihan" />
                        </div>
                            <h5>Bookstore</h5>
                            <p>Manajemen Buku yang melakukan Create, Read, Update, dan Delete menggunakan React Js. Website ini menggunakan database</p>
                        <div className="portofolio__item-cta">
                        </div>
                    </article>
                    
            </div>
        
  </section>
  )
}

export default MyProject