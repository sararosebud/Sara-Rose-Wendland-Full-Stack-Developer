import React from 'react';
import LittleBear from '../assets/images/CutieWave.png'
import Card from 'react-bootstrap/Card';

const Projects = () => {
    const ProjectList = [
        {
        id:1,
        name: "A Toast to the Weather",
        imageURL: LittleBear,

    },
    {
        id: 2,
        name: "Volunteer Quest",
        imageURL: LittleBear,

    },
    {
        id: 3,
        name: "DreamLand WonderLand",
        imageURL: LittleBear,

    },
    {
        id: 4,
        name: "GhostArt",
        imageURL: LittleBear,

    },

    {
        id: 5,
        name: "LLyrPkr",
        imageURL: LittleBear,

    },
    {
        id: 6,
        name: "Where in the World is the WildMan?",
        imageURL: LittleBear,

    }

]
    
    


    return (
        <div className='projects'>
            <h2>Projects</h2>
            <div className='wrapper'>
                {ProjectList.map((item) => {
                    return(
                        <div>
                            <Card>
                            <Card.Img variant='top' src={item.imageURL} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>

                           

                            </Card>
                        </div>

                    )
                })}
            </div>
        </div>
    );
};

export default Projects;