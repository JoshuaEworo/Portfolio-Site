import { useState } from 'react';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import { FiExternalLink } from 'react-icons/fi'

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const dropMenu = () => {
        return (
            <div className={styles.dropNavHolder}>
                <div className={styles.dropNav}>
                    <div className={styles.dropNavLink}>
                        <Link href="/" ><a onClick={toggleMenu}>Home</a></Link>
                    </div>
                    <div className={styles.dropNavLink}>
                        <Link href="/works"><a onClick={toggleMenu}>Works</a></Link>
                    </div>
                    <div className={styles.dropNavLink}>
                        <a onClick={toggleMenu} href='mailto:eworojoshua@gmail.com'>Contact</a> <a href='mailto:eworojoshua@gmail.com'><FiExternalLink className={styles.extLink}/></a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <navbar className={styles.nav}>
                <div className={styles.mainNav}>
                    {/* <div className={styles.darkMode}>
                        <svg className={styles.dMode} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path fillRule="evenodd" clipRule="evenodd" d="M35 18C35 27.3888 27.3888 35 18 35C17.235 35 16.4818 34.9495 15.7435 34.8516C13.0776 33.0167 9 28.4949 9 18C9 7.50508 13.0776 2.98327 15.7435 1.14844C16.4818 1.05053 17.235 1 18 1C27.3888 1 35 8.61116 35 18ZM18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0Z" fill="white" />
                        </svg>
                    </div> */}

                    <div className={styles.thelogo}>
                        <Link href="/"><a>
                        <svg className="logo" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/*  width="25" height="29" */}
                            <path d="M38 41H26.3821L20.4381 24.5M20.4381 24.5H38M20.4381 24.5L15.9977 12.1739M15.9977 12.1739L14.4941 8L2.87625 41H0M15.9977 12.1739H38" stroke="white" strokeWidth="5" />
                        </svg>
                        </a></Link>
                    </div>

                    <div className={styles.navRight}>
                        <div className={styles.hamburger}>
                            {menuOpen ? (
                                <a><AiOutlineClose onClick={toggleMenu} className={styles.burger} /></a>
                            ) : (
                                <a><HiMenuAlt4 onClick={toggleMenu} className={styles.burger} /></a>
                            )}
                        </div>
                    </div>
                </div>
                
                {menuOpen == false ? true : (
                    dropMenu()
                )}
            </navbar>

        </>
    )
}

