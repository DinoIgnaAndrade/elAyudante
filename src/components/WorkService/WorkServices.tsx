import React from 'react'
import styles from './WorkServices.module.css'

//Icons
import NutSuccess from '../IconsSvg/NutSuccess'
import Maintenance from '../IconsSvg/Maintenance'
import Cleaning from '../IconsSvg/Cleaning'
//Animation
import Template from '@/animation/Template'

type Props = {}

const WorkServices = (props: Props) => {
  return (
    <div className={styles.background}>

      <Template>

        <div id='services' className={styles.container}>

          <h1>Como trabajamos</h1>
          <div className={styles.divider}></div>
          <p>Seguimos un proceso simple y efectivo para asegurarnos de que tu aire acondicionado funcione a la perfección.
            Evaluamos tus necesidades, ofrecemos un presupuesto claro, realizamos la reparación o instalación,
            probamos el equipo y brindamos soporte continuo.</p>

          <div className={styles.servicesContainer}>

            <div className={styles.service}>
              <div className={styles.icon}>
                <NutSuccess />
              </div>
              <h1>Instalacion</h1>
              <p>Somos matriculados y aseguramos que tu instalación, de un equipo nuevo, tenga su garantia al dia.</p>
            </div>

            <div className={styles.service}>
              <div className={styles.icon}>
                <Maintenance />
              </div>
              <h1>Reparacion</h1>
              <p>Nos encargamos de todo el proceso de reparación de tu aire. Para que vuelva a funcionar como deberia.</p>
            </div>

            <div className={styles.service}>
              <div className={styles.icon}>
                <Cleaning />
              </div>
              <h1>Limpieza</h1>
              <p>Una Limpiza profunda es la mejor forma de asegurarnos de que el equipo funcione a la perfeccion.</p>
            </div>

          </div>

        </div>
        
      </Template>

    </div>
  )
}

export default WorkServices