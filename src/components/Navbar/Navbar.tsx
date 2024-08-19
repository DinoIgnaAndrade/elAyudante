import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../media/logo.jpg'

import Image from 'next/image'
import Link from 'next/link'


type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className={styles.container}>

            <div className={styles.logoContainer}>
                <Image className={styles.logo} src={logo} alt='Logo' />
                <Link href='/'><h1 className={styles.logoTitle}>El Ayudante</h1></Link>
            </div>

            <div className={styles.linksContainer}>

                <a className={styles.link} href="#contact">Contacto</a>
                <a className={styles.link} href="#services">Servicios</a>
                <a className={styles.link} href="#map">Donde Estamos</a>
                <a className={styles.link} href="#presentation">Conocenos</a>

            </div>
        </nav>
    )
}

export default Navbar