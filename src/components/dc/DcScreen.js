import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <main className='main'>
            <h1>DC Screen</h1>
            <HeroList publisher='DC Comics' />
        </main>
    )
}
