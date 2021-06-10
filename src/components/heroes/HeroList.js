import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import { HeroeContext } from './HeroContext';

export const HeroList = ({ publisher }) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <section className='parent-card animate__animated animate__fadeIn'>
            {
                heroes.map((hero) => {
                    return (
                        <HeroeContext.Provider key={hero.id} value={hero}>
                            <HeroCard />
                        </HeroeContext.Provider>
                            

                    )
                })
            }
        </section>
    )
}
