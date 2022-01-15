import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactBlock from '../components/ContactBlock';
import Footer from '../components/Footer';

export default function Home() {

  const featuredProjects = [
    {
      name: 'Weather App',
      tags: 'React | OpenWeatherApp API | CSS',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis amet quidem, inventore alias eos veritatis, neque cum aperiam quaerat sint culpa, repudiandae similique! Corrupti libero quis molestias laboriosam.',
      img: 'https://i.ibb.co/q1tmqTH/Weather-App-Logo-1.png',
      viewdemo: '/',
      viewcode: '/',
    },
    // {
    //   name: 'Google Homepage UI Clone',
    //   tags: 'HTML | CSS',
    //   desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis amet quidem, inventore alias eos veritatis, neque cum aperiam quaerat sint culpa, repudiandae similique! Corrupti libero quis molestias laboriosam.',
    //   img: 'https://i.ibb.co/X78pb2W/Google-Logo.png'
    // },
    {
      name: 'To-do List App',
      tags: 'React | JavaScript',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis amet quidem, inventore alias eos veritatis, neque cum aperiam quaerat sint culpa, repudiandae similique! Corrupti libero quis molestias laboriosam.',
      img: 'https://i.ibb.co/0yHFv59/To-Do-Logo.png',
      viewdemo: '/',
      viewcode: '/',
    },
    {
      name: 'ClientSyde - CRM App',
      tags: 'React | OpenWeatherApp API | CSS',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis amet quidem, inventore alias eos veritatis, neque cum aperiam quaerat sint culpa, repudiandae similique! Corrupti libero quis molestias laboriosam.',
      img: 'https://i.ibb.co/LCc498v/Client-SYDE-Logo.png',
      viewdemo: '/',
      viewcode: '/',
    },
  ]

  return (
    <div className="pageWrapper">
      <Head>
        <title>Joshua Eworo</title>
        <meta name="description" content="Portfolio of Joshua Eworo, Front End Developer based in Texas." />
        
      </Head>

      <main className=''>
        <Navbar />

        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.heroText}>
              <h3 className={styles.heroH3}>HELLO, MY NAME IS JOSHUA</h3>
              <h1 className='h1'>I am a Front-End Developer</h1>
              <p>Front-end web developer &amp; designer based in Texas.
                I specialize in the development of user-interface design for web applications.</p>
            </div>

            <div className={styles.heroContact}>
              <a href='mailto:eworojoshua@gmail.com' className="link">Contact me</a>
              <div className={styles.linksHolder}>
                {/* flex flex-row gap-8 mt-2 */}
                <a href="https://github.com/JoshuaEworo" rel="noreferrer" target="_blank"><FaGithub className={styles.heroLinks} /></a>
                <a href="https://www.linkedin.com/in/joshuaeworo/" rel="noreferrer" target="_blank"><FaLinkedin className={styles.heroLinks} /></a>
                <a href="https://twitter.com/VastLark" rel="noreferrer" target="_blank"><FaTwitter className={styles.heroLinks} /></a>
                {/* logo will be text-white w-7 h-9" */}
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.imgHolder}>
              <img className={styles.heroImage} alt="project image" src='https://i.ibb.co/NyhG5PF/EDF62-BFC-EC69-4-B7-C-A5-FC-DDA2573366-AB.png' width="640" height="342"/>
            </div>
          </div>
        </section>

        <section className={styles.featured}>
          <h1 className="h1">Featured Projects</h1>
          <div className={styles.projectsHolder}>
            {featuredProjects.map(project => {
              return (

                <div className={styles.projects}>
                  <div>
                    <div className={styles.projectHead}>
                      <h2 className="h2">{project.name}</h2>
                      <small>{project.tags}</small>
                    </div>
                    <p>{project.desc}</p>
                    <div className={styles.caseStudy}>
                      <a href={project.viewdemo}>View Demo &#10132;</a>
                      <a href={project.viewcode}>View Code &#10132;</a>
                    </div>
                  </div>
                  <img src={project.img} alt="Weather App Logo" width='500' height='500'/>
                </div>

              )
            })}
          </div>
        </section>
        
        <section className={styles.about}>
          <h1 className="h1">My story</h1>
          <div className={styles.aboutHolder}>
            <div className={styles.aboutText}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis exercitationem perferendis eveniet neque nobis quos minima corporis quae dicta totam necessitatibu.
                Pariatur similique architecto recusandae incidunt unde corrupti odio tempore eligendi quaerat, quam ad. Vel?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis exercitationem perferendis eveniet neque nobis quos minima corporis quae dicta totam necessitatibu.
                Pariatur similique architecto recusandae incidunt unde corrupti odio tempore eligendi quaerat, quam ad. Vel?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis exercitationem perferendis eveniet neque nobis quos minima corporis quae dicta totam necessitatibu.
                Pariatur similique architecto recusandae incidunt unde corrupti odio tempore eligendi quaerat, quam ad. Vel?</p>
            </div>
          </div>
        </section>

        <section className={styles.skills}>
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
        </section>

        <ContactBlock />

        <Footer />

      </main>
    </div>
  )
}
