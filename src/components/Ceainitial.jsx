import React from 'react'
import Header from './Header'
import '../components/style.components/ceainitial.css'

const Ceainitial = () => {
  return (
    <div>
        <Header/>
        <article className='Ceainitial'>
          <section>
            <img src="../image/image 1.png" alt="" />
          </section>
          <section className='Ceainitial_info'>
            <div>
              <h1 className='Cea_title'>Bienvenido a CEA EL SOL S.A.S</h1>
              <p>Conducir co en Sol, el centro de enseñanza automovilistica que marca la diferencia</p>
            </div>
            <div className='Ceainicial_info-two'>
               <nav className='Ceainitial_logo-name'>
                <img className='Ceainitial_logo' src="../image/imagenher.png" alt="" />
                
                <h1>CEA EL SOL</h1>
               </nav>
               <nav className='Ceainitial_descript'>
                <p>con los mas altos estandares de calidad</p>
                <p>Desea conocer mas sobre los servicios que el CENTRO DE ENSEÑANZA AUTOMOVILISTICA EL SEA SOL puede implementado acuerdo sus necesidades</p>
               </nav>
            </div>
          </section>
        </article>

    </div>
  )
}

export default Ceainitial