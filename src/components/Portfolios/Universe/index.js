import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Stack from '@mui/material/Stack';

import Logo from '../../../assets/images/portfolio/UGR_Logo.png'
import Portada from '../../../assets/images/portfolio/UgrPortada.png'
import Video from '../../../assets/videos/trailer_Ugr.mp4'

import Img1 from '../../../assets/images/portfolio/screenshots_UGR/UGR_Screen_01.jpg'
import Img2 from '../../../assets/images/portfolio/screenshots_UGR/UGR_Screen_02.jpg'
import Img3 from '../../../assets/images/portfolio/screenshots_UGR/UGR_Screen_03.png'
import Img4 from '../../../assets/images/portfolio/screenshots_UGR/UGR_Screen_04.png'
import Img5 from '../../../assets/images/portfolio/screenshots_UGR/UGR_Screen_05.jpg'
import Img6 from '../../../assets/images/portfolio/screenshots_UGR/UGR_Screen_06.jpg'


const Images = [{
    img: Img1,
},{
    img: Img2,  
},{
    img: Img3,  
},{
    img: Img4,  
},{
    img: Img5,  
},{
    img: Img6,  
}

]


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['U', 'n', 'i', 'v', 'e', 'r', 's', 'e', ' ', 'G', 'a', 'l', 'a', 'c', 't', 'i', 'c', ' ', 'R', 'a', 'c', 'i', 'n', 'g']}
                            idx={11}
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
                        {' '}
                        Racing will be the most competitive mode of Universe Galactic Racing, which will include a rank system with rewards for the most demanding players. It will also feature more classic modes, such as Time Attack, with weekly rotations and monthly events that include unique rewards. Finally, it will also include a Time Bomb mode, which will be pure driving races, where the last one in each lap will be eliminated, leaving only the last one standing.
                    </p>
                    <p>
                        {' '}
                        In addition, the game will feature a "Paddock", which will include a Housing system, which can be decorated with trophies, cars, skins and a variety of cosmetic elements, the Paddock will be composed of the list of friends of the players, which can visit and be visited at any time.
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