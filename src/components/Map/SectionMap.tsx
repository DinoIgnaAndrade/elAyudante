import React from 'react'
import styles from './SectionMap.module.css'
//Component
import Map from './Map'
//Icon
import World from '../IconsSvg/World'
//Animation
import Template from '@/animation/Template'

type Props = {}

const SectionMap = (props: Props) => {
  return (
    <div className={styles.background}>

      <Template>

        <div id='map' className={styles.container}>

          <div className={styles.info}>
            <World />
            <h1 className={styles.title}>Nuestra ubicación</h1>
            <p>Estas son las Zonas por las que trabajamos, ten en cuentas que cubrimos zonas aledañas a Lomas de Zamora. Tambien cubrimos Capital Federal</p>
          </div>


          <div className={styles.map}>
            <Map />
          </div>

        </div>

      </Template>

    </div>
  )
}

export default SectionMap