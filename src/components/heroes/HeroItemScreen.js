import React from 'react'

export const HeroItemScreen = ({hero}) => {

    const { publisher, alter_ego, first_appearance, characters, description } = hero;

    return (
        <>
          <li className='list-group__item'>
                        <p className='paragraph'>
                            <span className='list-group__span'>Alter Ego: </span>
                            {alter_ego}
                        </p>
                    </li>

                    {
                        (alter_ego !== characters)
                        &&
                        <li className='list-group__item'>
                            <p className='paragraph'>
                                <span className='list-group__span'>Characters: </span>
                                {characters}
                            </p>
                        </li>
                    }
                    <li className='list-group__item'>
                        <p className='paragraph'>
                            <span className='list-group__span'>
                                First Appearance:   
                            </span>
                            {first_appearance}
                        </p>
                    </li>
                    <li className='list-group__item'>
                        <p className='paragraph'>
                            <span className='list-group__span'>Publisher: </span>
                            {publisher}
                        </p>
                    </li>
                    {
                        (description !== undefined)
                        &&
                        <li className='list-group__item'>
                            <p className='paragraph'>
                                <span className='list-group__span'>Biography: </span> {description}
                            </p>
                        </li>
                    }   
        </>
    )
}
