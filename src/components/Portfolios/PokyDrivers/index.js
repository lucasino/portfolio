import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import aeIcon from '../../../assets/images/aeIcon.png'
import cIcon from '../../../assets/images/cIcon.png'
import houdiniIcon from '../../../assets/images/houdiniIcon.png'
import pMIcon from '../../../assets/images/pMIcon.png'
import psIcon from '../../../assets/images/psIcon.png'
import unityIcon from '../../../assets/images/unityIcon.png'


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
                            strArray={['P', 'o', 'k', 'y', ' ', 'D', 'r', 'i', 'v', 'e', 'r', 's']}
                            idx={21}
                        />
                    </h1>
                    <p>
                        Poky Drivers is an adventure video game for mobile devices, which aims to teach road safety and aims to teach ROAD SAFETY and civic responsibility to children. The objective is that children can relate to all aspects of road safety in a fun and efficient of road safety in a fun and effective way, in an effort focused on the formation and acquisition of safety and acquisition of safety concepts that will be useful for their pedestrian and vehicular pedestrian and vehicular traffic in the future.
                    </p>
                    <p>
                        {' '}
                        Geared for children ages 6 and up, the videogame aims to teach road safety concepts through "discovery learning" in a colorful adventure around the world. adventure around the world. With this method, the players will learn, through their adventure
                        their adventure through the five continents, all the essential rules for a safe circulation on public roads. safe circulation on public roads.
                    </p>
                    <p>
                        Poky Drivers has been designed to be a cross-cutting tool, which is useful for both parents and teaching teams, to useful for both parents and teachers, to instill in children responsible habits and behaviors. responsible habits and behaviors. We want Poky Drivers to be a educational tool within the teaching program of educational centers. In this way children will be able to become aware of road safety, understand its rules, learn key road safety vocabulary and also learn about sustainability. sustainability. Through the digitization of road safety, children can learn by playing. learn by playing.

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