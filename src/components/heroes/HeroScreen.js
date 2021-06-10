import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroesById';
import { HeroItemScreen } from './HeroItemScreen';

export const HeroScreen = ({history}) => {

    const { heroid } = useParams();

    const hero = useMemo(() => getHeroesById(heroid), [heroid]);

    if (!hero) return <Redirect to='/' />

    const handleReturn = () =>{
        if(history.length <= 2){
            history.push('/')
        }else{

            history.goBack();
        }
    }

    const { superhero } = hero;

    return (
        <article className='article'>
            <div className='container-img'>
                <img 
                src={`../assets/heroes/${heroid}.jpg`} 
                alt={`${superhero}`} 
                />
            </div>
            <div className='container-description'>
                <p className='title'>{superhero}</p>
                <ul className='list-group'>
                   <HeroItemScreen hero={hero} />
                </ul>

                <button className='btn' onClick={handleReturn}>
                    return
                </button>
            </div>
        </article>
    )
}
