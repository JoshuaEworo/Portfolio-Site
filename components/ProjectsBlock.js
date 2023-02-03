import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Image from 'next/image'

import styles from '../styles/ProjectsBlock.module.css';

function ProjectsDiv({ project }){

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

    return(
        <motion.div className={styles.projects} ref={ref} variants={fadeInVariant}initial="hidden" animate={control}>
            <div className={styles.projectInfo}>
                <div className={styles.projectHead}>
                    <h2 className="h2">{project.name}</h2>
                    <small>{project.tags}</small>
                </div>
                <p>{project.desc}</p>
                <div className={styles.caseStudy}>
                    <a target="_blank"  rel="noreferrer" href={project.viewdemo}>View Demo &#10132;</a>
                    <a target="_blank"  rel="noreferrer" href={project.viewcode}>View Code &#10132;</a>
                </div>
            </div>
            <div className={styles.projectImage}>
                <Image src={project.img} alt="Weather App Logo" width={500} height={500} />
            </div>
        </motion.div>
    )
}

export default function ProjectsBlock(){
    const featuredProjects = [
//         {
//           id: 1,
//           name: 'Weather App',
//           tags: 'React | OpenWeatherApp API | CSS',
//           desc: 'A simple weather web application made with ReactJS and the OpenWeatherApp API.',
//           img: 'https://i.ibb.co/q1tmqTH/Weather-App-Logo-1.png',
//           viewdemo: 'https://joshuaeworo.github.io/React-Weather-App/',
//           viewcode: 'https://github.com/JoshuaEworo/React-Weather-App',
//         },
//   Omitted Weather APP because i broke it
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
          img: 'https://i.ibb.co/M8F5N8R/Client-SYDE-Logo.png',
          viewdemo: 'https://JoshuaEworo.github.io/React-CRM-App',
          viewcode: 'https://github.com/JoshuaEworo/React-CRM-App',
        },
      ]

    return (
        <>
            <div className={styles.projectsHolder}>
                {featuredProjects.map(project => {
                    return (
                        <ProjectsDiv project={project} key={project.id}/>
                    )
                })}
            </div>
        </>
    )
}
