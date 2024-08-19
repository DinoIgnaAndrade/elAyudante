'use client'
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants: Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

interface TemplateProps {
  children: React.ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  const { ref, inView } = useInView({ // Animar solo la primera vez que se vea
    threshold: 0.4,   // Porcentaje de visibilidad requerido para activar la animación
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6 }}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default Template;
