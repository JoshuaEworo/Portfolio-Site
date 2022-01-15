import styles from '../styles/Footer.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerHolder}>
                <div className={styles.footerUp}>
                    <p>@2021 Joshua Eworo</p>
                </div>
                <div className={styles.footerDown}>
                    <a href="https://github.com/JoshuaEworo" rel="noreferrer" target="_blank"><FaGithub className={styles.navLinks} /></a>
                    <a href="https://www.linkedin.com/in/joshuaeworo/" rel="noreferrer" target="_blank"><FaLinkedin className={styles.navLinks} /></a>
                    <a href="https://twitter.com/VastLark" rel="noreferrer" target="_blank"><FaTwitter className={styles.navLinks} /></a>
                </div>
            </div>
        </footer>
    )
}