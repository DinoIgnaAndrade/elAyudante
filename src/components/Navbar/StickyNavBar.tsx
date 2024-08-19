'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './StickyNavBar.module.css';

const StickyNavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav
            className={styles.stickyNav}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.5 }}
        >
                <div className={styles.linksContainer}>
                    <a className={styles.link} href="#contact">Contacto</a>
                    <a className={styles.link} href="#services">Servicios</a>
                    <a className={styles.link} href="#map">Donde Estamos</a>
                    <a className={styles.link} href="#presentation">Conocenos</a>
                </div>

        </motion.nav>
    );
};

export default StickyNavBar;
