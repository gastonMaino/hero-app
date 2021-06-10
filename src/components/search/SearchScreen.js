import React from 'react';
import { SearchForm } from './SearchForm';

export const SearchScreen = ({ history }) => {
    return (
        <article className='search'>
            <div className='container-search-title'>
                <h1 className='search-title'>Search</h1>
            </div>

            <div className='container-items-search'>
                <SearchForm history={history} />
            </div>
        </article>
    )
}
