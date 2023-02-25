import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect,useState } from 'react'
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
    },[])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P','o','k','y',' ','D','r','i','v','e','r','s']}
                        idx={21}
                    />
                </h1>
                <p>
                Game Director, Game Designer & Game Producer, Madrid Director behind the entire development process of Poky Drivers for iOS & Android, from setting up the office, hiring staff, full game design, level design, art and pipeline design. Currently running competitive arcade racing
                game.
                </p>
                <p>
                    {' '}
                Racing Simulation Manager, Madrid Manager of more than 15 professional simulators for the Motor & Sport Institute and for the racing team Teo Martin Motorsport. Developing realistic experiences using real data acquired in the circuits. These developments are used by professional drivers of F4, F3, GT4 and GT3. Also performing experiences for companies in simulator racing events.
                </p>
                <p>
                Sound/Lighting Technician Manager, Madrid Sound and light technician in different theaters in the community of Madrid. Performing concerts, musicals, theater, assemblies, etc...
                </p>
                
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>                    
                        <img className='imagenIcon' src={aeIcon} alt="logo"/>                        
                    </div>
                    <div className='face2'>
                        <img className='imagenIcon' src={cIcon} alt="logo"/> 
                    </div>
                    <div className='face3'>
                        <img className='imagenIcon' src={pMIcon} alt="logo"/> 
                    </div>
                    <div className='face4'>
                        <img className='imagenIcon' src={houdiniIcon} alt="logo"/> 
                    </div>
                    <div className='face5'>
                        <img className='imagenIcon' src={psIcon} alt="logo"/> 
                    </div>
                    <div className='face6'>
                        <img className='imagenIcon' src={unityIcon} alt="logo"/> 
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )

}
export default About