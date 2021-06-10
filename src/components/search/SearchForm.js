import React from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm/useForm'
import { SearchResults } from './SearchResults';


export const SearchForm = ({ history }) => {


    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [{ search }, handleInputChange] = useForm({
        search: q
    })

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`)
    }

    return (
        <>
            <section className='search-form'>
                <h2 className='search-form__title'>Search Form:</h2>
                <form onSubmit={handleSearch} className='form'>
                    <input
                        type='text'
                        name='search'
                        value={search}
                        placeholder='find your hero'
                        aria-label='find your hero'
                        className='form__input'
                        autoComplete='off'
                        onChange={handleInputChange}
                    />
                    <button className='btn-search'>
                        Search
                    </button>
                </form>
            </section>

            <SearchResults q={q} />
        </>
    )
}
