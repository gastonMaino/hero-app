import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <main className='main'>
            <h1>Marvel Screen</h1>
            <HeroList publisher='Marvel Comics' />
        </main>
    )
}
