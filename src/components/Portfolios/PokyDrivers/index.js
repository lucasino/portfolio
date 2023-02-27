import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Stack from '@mui/material/Stack';

import Logo from '../../../assets/images/portfolio/PD_Logo.png'
import Portada from '../../../assets/images/portfolio/PokyPortada.png'
import Video from '../../../assets/videos/trailer_Poky.mp4'

import Img1 from '../../../assets/images/portfolio/screenshots_PD/PD_Screen_01.PNG'
import Img2 from '../../../assets/images/portfolio/screenshots_PD/PD_Screen_02.PNG'
import Img3 from '../../../assets/images/portfolio/screenshots_PD/PD_Screen_03.PNG'
import Img4 from '../../../assets/images/portfolio/screenshots_PD/PD_Screen_04.PNG'
import Img5 from '../../../assets/images/portfolio/screenshots_PD/PD_Screen_05.PNG'
import Img6 from '../../../assets/images/portfolio/screenshots_PD/PD_Screen_06.jpg'

const Images = [{
    img: Img1,
}, {
    img: Img2,
}, {
    img: Img3,
}, {
    img: Img4,
}, {
    img: Img5,
}, {
    img: Img6,
}

]

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4500)
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
                    <Stack className='gallery' direction="row" spacing={1}>
                        {Images.map(({ img }) => (
                            <img className='image-gallery' src={img} alt="img" />
                        ))}
                    </Stack>


                </div>
                <div className='stage-cube-cont'>
                    <img className='solid-logo' src={Logo} alt="S" />
                    <video className='video'
                        autoPlay
                        loop
                        muted
                        width="640" height="360"
                        poster={Portada}
                    >
                        <source
                            src={Video}
                            type="video/mp4"
                        />
                    </video>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}
export default About