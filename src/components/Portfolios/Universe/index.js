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
                            strArray={['U', 'n', 'i', 'v', 'e', 'r', 's', 'e', ' ', 'G', 'a', 'l', 'a', 'c', 't', 'i', 'c', ' ', 'R', 'a', 'c', 'i', 'n', 'g']}
                            idx={47}
                        />
                    </h1>
                    <p>
                        Universe Galactic Racing is a new Hero Arcade Racing Online where the best drivers from all over the universe face off in different races throughout the galaxy. Universe Galactic Racing is an online racing video game, where players will be able to choose from a wide roster of characters and vehicles, each with unique abilities and characteristics.

                    </p>
                    <p>
                        {' '}
                        In the races, 12 drivers will face off in teams of three to prove who is the best. The different characteristics of the cars and the multiple skills of the characters will give rise to unique strategies and combinations.
                    </p>
                    <p>
                    Racing will be the most competitive mode of Universe Galactic Racing, which will include a rank system with rewards for the most demanding players. It will also feature more classic modes, such as Time Attack, with weekly rotations and monthly events that include unique rewards. Finally, it will also include a Time Bomb mode, which will be pure driving races, where the last one in each lap will be eliminated, leaving only the last one standing.
                    </p>
                    <p>
                    In addition, the game will feature a "Paddock", which will include a Housing system, which can be decorated with trophies, cars, skins and a variety of cosmetic elements, the Paddock will be composed of the list of friends of the players, which can visit and be visited at any time.
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