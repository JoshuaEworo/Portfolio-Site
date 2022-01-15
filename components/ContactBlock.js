import styles from '../styles/ContactBlock.module.css'
import { FaTelegramPlane } from 'react-icons/fa';

export default function ContactBlock(){
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <h1 className="h1">Let's create amazing work together!</h1>
                <p>I'm available for new collaborations &amp; projects. If you'd like to work with me, reach out, I'll be happy to help :)</p>
                <div className={styles.button}>
                    <a className="h3" href='mailto:eworojoshua@gmail.com'>Contact Me</a>
                    <FaTelegramPlane className={styles.plane}/>
                </div>
            </div>
        </section>
    )
}