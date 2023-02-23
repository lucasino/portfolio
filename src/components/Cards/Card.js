import React from 'react'
import pokyPortada from '../../assets/images/portfolio/PokyPortada.png'


const Card  = () =>{


    return (
        <div className='container card-page'>
            <div className='card'>
                <img src={pokyPortada}  alt=""/>
                <div className='card-body'>
                    <h4 className='card-title'>My Title</h4>
                    <p className='card-text text-secondary'> Poky Drivers is an adventure video game for mobile devices, which aims to teach road safety and aims to teach ROAD SAFETY and civic responsibility to children. 
children. The objective is that children can relate to all aspects of road safety in a fun and efficient of road safety in a fun and effective way, in an effort focused on the formation and acquisition of safety and acquisition of safety concepts that will be useful for their pedestrian and vehicular pedestrian and vehicular traffic in the future.
                    </p>
                </div>
            </div>
        </div>

    )


}


export default Card