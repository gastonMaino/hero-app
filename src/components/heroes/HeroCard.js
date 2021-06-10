import React, { useContext } from 'react';
import { HeroeContext } from './HeroContext';
import { InfoHero } from './InfoHero';

export const HeroCard = () => {

    const {id, superhero} = useContext(HeroeContext)

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={`assets/heroes/${id}.jpg`} alt={`Is a hero ${superhero}`} />
            </div>

            <div className='card-content'>
                <InfoHero />
            </div>
        </div>
    )
}
