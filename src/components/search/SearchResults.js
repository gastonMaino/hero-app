import React, { useMemo } from 'react';
import { HeroeContext } from '../heroes/HeroContext';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import PropTypes from 'prop-types';

export const SearchResults = ({q}) => {

    const heroData = useMemo(() => getHeroesByName(q), [q]);


    return (
        <section className='section-results'>
            <h2>Results: </h2>

                {
                    (q === '')
                    &&
                    <div className='alert'>
                        <p className='alert__paragraph'>
                            Search a hero!
                        </p>
                    </div>
                }

                {
                    (q !== '' && heroData.length === 0)
                    &&
                    <div className='alert-danger'>
                        <p className='alert-danger__paragraph'>
                            There is no a hero {q}
                        </p>
                    </div>
                }

                {
                    heroData.map((hero) => {
                        return (
                            <HeroeContext.Provider
                                key={hero.id} value={hero}
                            >
                                <HeroCard />
                            </HeroeContext.Provider>
                        )

                    })
                }    
        </section>
    )
}

SearchResults.propTypes = {
    q: PropTypes.string.isRequired
}
