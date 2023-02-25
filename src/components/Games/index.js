import './index.scss';
import Loader from 'react-loaders'
import Card from '../Cards/Card'
import Stack from '@mui/material/Stack';
import pokyPortada from '../../assets/images/portfolio/PokyPortada.png'
import UgrPortada from '../../assets/images/portfolio/UgrPortada.png'

const cards = [
    {
        id: 1,
        title: "Poky Drivers",
        text: "Poky Drivers is an adventure video game for mobile devices, which aims to teach road safety and aims to teach ROAD SAFETY and civic responsibility to children. The objective is that children can relate to all aspects of road safety in a fun and efficient of road safety in a fun and effective way, in an effort focused on the formation and acquisition of safety and acquisition of safety concepts that will be useful for their pedestrian and vehicular pedestrian and vehicular traffic in the future.",
        image: pokyPortada,
        url: "/pokydrivers",
    },
    {
        id: 2,
        title: "Universe Galactic Racing",
        text: "Universe Galactic Racing is a new Hero Arcade Racing Online where the best drivers from all over the universe face off in different races throughout the galaxy. Universe Galactic Racing is an online racing video game, where players will be able to choose from a wide roster of characters and vehicles, each with unique abilities and characteristics.",
        image: UgrPortada,
        url: "/ugr",
    },

];

const Games = () => {


    return (
        <>
            <div className="container games-page">
                <div className="text-zone">
                <Stack direction="row" spacing={80}>
                    {cards.map(({ title, image, text, url, id }) => (
                                <Card key={id} imageSource={image} title={title} text={text} url={url} />
                    ))}
                     </Stack>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Games