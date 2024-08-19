import React from 'react'
import styles from './Header.module.css'

//Animation
import Template from '@/animation/Template'

type Props = {}

const Header = (props: Props) => {
  return (

    <header className={styles.container}>
      <Template>
        <h1 className={styles.title}>Instalación y Reparación de Aires Acondicionados</h1>
        <p className={styles.parragraph}>"Nos especializamos en reparar e instalar aires acondicionados para que tu hogar esté siempre fresco y agradable.
          Presumimos de ser un equipo confiable y rápido, listo para trabajar."</p>
      </Template>
    </header>

  )
}

export default Header;