'use client'
import React from 'react'
import styles from './Notification.module.css'
import Link from 'next/link'

//icon
import { FaWhatsapp } from "react-icons/fa";
import Toolsbox from '../IconsSvg/Toolsbox';
//Animation
import Template from '@/animation/Template';



type Props = {}

const Notification = (props: Props) => {
    return (
        <div className={styles.background}>
        <Template>

            <div id="contact" className={styles.container}>
                <div className={styles.icon}><Toolsbox /></div>

                <div className={styles.subcontainer}>
                    <h1 className={styles.title}> ¿Queres Hablar con nosotros?</h1>
                    <p>¡Estamos aquí para ayudarte! Si tienes alguna pregunta o deseas saber más sobre cómo podemos colaborar,
                        no dudes en ponerte en contacto con nosotros. Envíanos un mensaje o llámanos y estaremos encantados de asistirte.</p>
                </div>

                <div className={styles.link}>
                    <h3>Contáctanos</h3>
                    <Link className={styles.contactIcon} href="https://wa.me/+5491137839288">
                        <FaWhatsapp size={50} />
                    </Link>
                </div>
            </div>

        </Template>
        </div>
    )
}

export default Notification