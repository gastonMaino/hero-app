import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeroeContext } from './HeroContext';



export const InfoHero = () => {
    const { id, superhero, alter_ego, first_appearance, characters } = useContext(HeroeContext);
    return (
        <>
            <p className='title'>{superhero}</p>
            <p className='paragraph'>{alter_ego}</p>

            {
                (alter_ego !== characters)
                &&
                <p className='paragraph'>{characters}</p>
            }

            <p className='paragraph'>
                <span className='paragraph__span'>
                    {first_appearance}
                </span>
            </p>

            <Link to={`./hero/${id}`} className='button'>
                See more...
                </Link>

        </>
    )
}
