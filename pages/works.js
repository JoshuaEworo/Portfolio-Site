import Head from 'next/head'
import Navbar from '../components/Navbar'
import ContactBlock from '../components/ContactBlock';
import Footer from '../components/Footer';

import styles from '../styles/Works.module.css'

export default function Works() {
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
                <title>Works | Joshua Eworo</title>
                <meta name="description" content="Portfolio of Joshua Eworo, Front End Developer based in Texas." />
            </Head>

            <main className=''>
                <Navbar />

                <section className={styles.pageHeader}> 
                    <h1 className='h1'>Portfolio</h1>
                </section>

                <section className={styles.featured}>
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
                                    <img src={project.img} alt="Weather App Logo" width='500' height='500' />
                                </div>
                            )
                        })}
                    </div>
                </section>

                <ContactBlock />
                <Footer />
            </main>
        </div>
    )
}