import Head from 'next/head'
import Navbar from '../components/Navbar'
import ContactBlock from '../components/ContactBlock';
import Footer from '../components/Footer';

import Image from 'next/image';

import styles from '../styles/Works.module.css'
import ProjectsBlock from '../components/projectsBlock';

export default function Works() {
    const featuredProjects = [
        {
            id: 1,
            name: 'Weather App',
            tags: 'React | OpenWeatherApp API | CSS',
            desc: 'A simple weather web application made with ReactJS and the OpenWeatherApp API.',
            img: 'https://i.ibb.co/q1tmqTH/Weather-App-Logo-1.png',
            viewdemo: 'https://joshuaeworo.github.io/React-Weather-App/',
            viewcode: 'https://github.com/JoshuaEworo/React-Weather-App',
            },
            // {
            //   name: 'Google Homepage UI Clone',
            //   tags: 'HTML | CSS',
            //   desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis amet quidem, inventore alias eos veritatis, neque cum aperiam quaerat sint culpa, repudiandae similique! Corrupti libero quis molestias laboriosam.',
            //   img: 'https://i.ibb.co/X78pb2W/Google-Logo.png'
            // },
            {
            id: 2,
            name: 'To-do List App',
            tags: 'React | JavaScript',
            desc: 'A to-do list web application made using ReactJS that has CRUD functionality.',
            img: 'https://i.ibb.co/0yHFv59/To-Do-Logo.png',
            viewdemo: 'https://joshuaeworo.github.io/React-Todo-App/',
            viewcode: 'https://github.com/JoshuaEworo/React-Todo-App',
            },
            {
            id: 3,
            name: 'ClientSyde - CRM App',
            tags: 'React | Bootstrap | Localhost',
            desc: 'A bare-bones web application for handling and keeping track of client information that has CRUD, search, and filter functionality.',
            img: 'https://i.ibb.co/LCc498v/Client-SYDE-Logo.png',
            viewdemo: 'https://JoshuaEworo.github.io/React-CRM-App',
            viewcode: 'https://github.com/JoshuaEworo/React-CRM-App',
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
                    <ProjectsBlock />
                </section>

                <ContactBlock />
                <Footer />
            </main>
        </div>
    )
}