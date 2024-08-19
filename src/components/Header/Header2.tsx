import React from 'react'
import styles from './Header.module.css'

//Animation
import Template from '@/animation/Template'

type Props = {}

const Header2 = (props: Props) => {
  return (
    <header className={styles.container2}>
      <Template>
        <h1 className={styles.title}>Tambien reparamos Placas Eletronicas</h1>
        <p className={styles.parragraph}>"Ademas de reparar las placas de los mismos aires, nos encargamos de los electrodomesticos en general."</p>
      </Template>
    </header>
  )
}

export default Header2;