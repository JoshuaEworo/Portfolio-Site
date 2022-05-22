import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import ContactBlock from '../components/ContactBlock';
import Footer from '../components/Footer';

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectsBlock from '../components/ProjectsBlock';

export default function Home() {

  const scroll = () => {
    const section = document.querySelector( '#featured' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const fadeInHeroVariant = {
    visible: { opacity: 1, scale: 1, transition: { delay: .4} },
    hidden: { opacity: 0, scale: 1.2 }
  };

  const fadeInVariant = {
    visible: { opacity: 1, scale: 1 }, //transition: { delay: .4}
    hidden: { opacity: 0, scale: 0.9 }
  };

  //ref={ref} variants={fadeInVariant}initial="hidden" animate={control}

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  //hero
  const heroControl = useAnimation();
  const [heroRef, heroInView] = useInView();

  useEffect(() => {
    if (heroInView) {
      heroControl.start("visible");
    }
  }, [heroControl, heroInView]);

  //Story
  const storyControl = useAnimation();
  const [storyRef, storyInView] = useInView();

  useEffect(() => {
    if (storyInView) {
      storyControl.start("visible");
    } else {
      storyControl.start("hidden");
    }
  }, [storyControl, storyInView]);

  //Skills
  const skillsControl = useAnimation();
  const [skillsRef, skillsInView] = useInView();

  useEffect(() => {
    if (skillsInView) {
      skillsControl.start("visible");
    } else {
      skillsControl.start("hidden");
    }
  }, [skillsControl, skillsInView]);


  return (
    <div className="pageWrapper">
      <Head>
        <title>Joshua Eworo</title>
        <meta name="description" content="Portfolio of Joshua Eworo, Front End Developer based in Texas." />
        
      </Head>

      <Navbar />
      <main className=''>

        <motion.section className={styles.hero} ref={heroRef} variants={fadeInHeroVariant} initial="hidden" animate={heroControl}>
          <div className={styles.heroMain} >
            <div className={styles.heroText}>
              <h3 className={styles.heroH3}>HELLO, MY NAME IS JOSHUA EWORO</h3>
              <h1>I am a Front-End Developer</h1>
              <p>Front-end web developer &amp; designer based in Houston.
                I specialize in the development of user-interface design for web applications and websites.</p>
            </div>

            <div className={styles.heroContact}>
              <a href='mailto:eworojoshua@gmail.com' className="link">Contact me</a>
              <div className={styles.linksHolder}>
                {/* flex flex-row gap-8 mt-2 */}
                <a href="https://github.com/JoshuaEworo" rel="noreferrer" target="_blank"><FaGithub className={styles.heroLinks} /></a>
                <a href="https://www.linkedin.com/in/joshuaeworo/" rel="noreferrer" target="_blank"><FaLinkedin className={styles.heroLinks} /></a>
                <a href="https://twitter.com/JoshuaEworo/" rel="noreferrer" target="_blank"><FaTwitter className={styles.heroLinks} /></a>
                {/* logo will be text-white w-7 h-9" */}
              </div>
            </div>
          </div>

          <div className={styles.scroll}>
            <p onClick={scroll}>Scroll</p>
          </div>
        </motion.section>

        <section className={styles.featured}>
          <div id="featured" className={styles.divLine}></div>
          <motion.h1 className="h1" ref={ref} variants={fadeInVariant} initial="hidden" animate={control}>Featured Projects</motion.h1>
          <ProjectsBlock/>
        </section>
        
        <motion.section className={styles.about} ref={storyRef} variants={fadeInVariant}initial="hidden" animate={storyControl}>
          <h1 className="h1">My story</h1>
          <div className={styles.aboutHolder}>
            <div className={styles.aboutText}>
              <p>Hello, I&apos;m Joshua Eworo, a self-taught Front-end Developer based out of Houston.
                I find joy in being able to bring together the worlds of creativity and logic. 
                I enjoy using my skill-set to create products that not only have beautiful aesthetics, but have amazing utility as well.
              </p>
              <p>From an early age, I loved being immersed in technology and innovation in various aspects.
                I did it all when I was younger, from tinkering with arduinos and robot kits, to letting my imagination run wild creating little video games.
                My love for technology and creation brought me here, to a place where I can utilize my skill-set to contribute to this ever growing technological landscape.</p>
              <p>I&apos;m excited to continue refining and developing my skills to learn and grow.
                To be able to bring the best experience to your users is a pleasure of mine. Want to tell me about any available job opportunities or just want to say hello? <a className={styles.reachOut} href='mailto:eworojoshua@gmail.com'>Reach out</a> :&#41;</p>
            </div>
          </div>
        </motion.section>

        <motion.section className={styles.skills} ref={skillsRef} variants={fadeInVariant}initial="hidden" animate={skillsControl}>
          <h1 className="h1">Skills</h1>
          <div className={styles.skillsHolder}>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>User Experience</span>
              <span>User Interface Design</span>
              <span>Interaction Design</span>
              <span>Storyboarding</span>
              <span>Squarespace</span>
              <span>ShowIt</span>
              <span>Figma</span>
              <span>Sketch</span>
          </div>
        </motion.section>

        <ContactBlock />

        <Footer />

      </main>
    </div>
  )
}
