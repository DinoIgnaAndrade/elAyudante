import React from 'react'
import styles from './Footer.module.css'
import logo from '../../media/devnologo.jpg'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.container}>

            <div className={styles.linksContainer}>
                <Link href="https://wa.me/+5491137839288"><p className={styles.link}>Tel: +5491137839288</p></Link>
            </div>

            <div className={styles.logoContainer}>
                <h1 className={styles.logoTitle}>Creado por</h1>
                <Link href='https://devno.netlify.app/'><Image className={styles.logo} src={logo} alt='Logo' /></Link>
            </div>


        </footer>
    )
}

export default Footer