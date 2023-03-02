import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import aeIcon from '../../assets/images/aeIcon.png'
import cIcon from '../../assets/images/cIcon.png'
import houdiniIcon from '../../assets/images/houdiniIcon.png'
import pMIcon from '../../assets/images/pMIcon.png'
import psIcon from '../../assets/images/psIcon.png'
import unityIcon from '../../assets/images/unityIcon.png'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hi! I'm a Game Designer, Producer and Project Manager with more than 4 years of experience in the videogame industry. My passion for videogames started since I was a kid, and since then I have dedicated my professional career to creating game experiences that I am proud of.
                    </p>                    
                    <p>
                        {' '}
                        As a video Game Designer, I have worked on projects across different genres and platforms, from an educational video game to teach road safety to children to a multiplayer arcade racer. My focus has always been to create games that offer a unique and engaging experience for players. I am proud to have been part of the development team for several games that have been well received by gamers.
                    </p>
                    <p>
                        {' '}
                        As a Producer and Project Manager, I have been involved in all phases of game development, from conceptualization to launch. I have been responsible for purchasing computers, office supplies, hiring people, designing and overseeing the development of the games. My ability to communicate effectively and convey ideas has allowed me to lead successful teams and get projects completed on time and on budget.
                    </p>
                    <p>
                        {' '}
                        I believe that video games can be a powerful tool for storytelling, teaching skills and, of course, providing fun and entertainment to players. As a video game designer, I am committed to creating games that offer exciting and meaningful experiences for gamers of all ages and abilities.
                    </p>
                    <p>
                        I also have experience as a Sound and Light Technician, as I worked 4 years as technical manager in different theaters in Madrid, in charge of carrying out all kinds of works, from concerts, plays, musicals, meetings and various events.
                    </p>
                    <p>
                        {' '}
                        If you are looking for a passionate and committed video game designer, please feel free to contact me. I would love the opportunity to work on exciting and challenging projects with people who share my passion for video games.
                    </p>

                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <img className='imagenIcon' src={aeIcon} alt="logo" />
                        </div>
                        <div className='face2'>
                            <img className='imagenIcon' src={cIcon} alt="logo" />
                        </div>
                        <div className='face3'>
                            <img className='imagenIcon' src={pMIcon} alt="logo" />
                        </div>
                        <div className='face4'>
                            <img className='imagenIcon' src={houdiniIcon} alt="logo" />
                        </div>
                        <div className='face5'>
                            <img className='imagenIcon' src={psIcon} alt="logo" />
                        </div>
                        <div className='face6'>
                            <img className='imagenIcon' src={unityIcon} alt="logo" />
                        </div>
                    </div>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}
export default About