import styles from '../styles/ContactBlock.module.css'
import { FaTelegramPlane } from 'react-icons/fa';

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ContactBlock(){

    const fadeInVariant = {
        visible: { opacity: 1, scale: 1 }, //transition: { delay: .4}
        hidden: { opacity: 0, scale: 0.9 }
      };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);

    return (
        <motion.section className={styles.section} ref={ref} variants={fadeInVariant}initial="hidden" animate={control}>
            <div className={styles.card}>
                <h1 className="h1">Let&apos;s create amazing work together!</h1>
                <p>I&apos;m available for new collaborations &amp; projects. If you&apos;d like to work with me, reach out, I&apos;ll be happy to help!</p>
                <div className={styles.button}>
                    <a className="h3" href='mailto:eworojoshua@gmail.com'>Contact Me</a>
                    <FaTelegramPlane className={styles.plane}/>
                </div>
            </div>
        </motion.section>
    )
}