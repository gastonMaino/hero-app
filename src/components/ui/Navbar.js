import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const history = useHistory()

    const { user:{name}, dispatch } = useContext(AuthContext);

    const handleLogout = () =>{
        dispatch({
            type: types.logout
        })

        history.replace('/login')
    }

    return (
        <header className='header'>
            <nav className='nav'>

                <Link to='/' className='main-menu__brand'>
                    Asociaciones
                </Link>

                <ul className='main-menu'>
                    <li className='main-menu__item'>
                        <NavLink activeClassName='active' exact to='/marvel' className='main-menu__link'>
                            Marvel
                        </NavLink>
                    </li>
                    <li className='main-menu__item'>
                        <NavLink activeClassName='active' exact to='/dc' className='main-menu__link'>
                            DC
                        </NavLink>
                    </li>
                    <li className='main-menu__item'>
                        <NavLink activeClassName='active' exact to='/search' className='main-menu__link'>
                            Search
                        </NavLink>
                    </li>
                    <li className='main-menu__item'>
                        <button className='main-menu__btn' onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </ul>
                <p className='main-menu__user'>
                    {`${name}`}
                </p>
            </nav>
        </header>
    )
}
