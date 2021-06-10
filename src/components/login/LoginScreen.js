import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () =>{
        // history.push('/');

        const lastpath = localStorage.getItem('lastpath') || '/';

        dispatch({
            type: types.login,
            payload: {name:'Gaston'}
        })
        history.replace(lastpath);
    }

    return (
        <main className='main-login'>
            <article className='container'>
                <div className='container-title-login'>
                    <h1 className='title-login'>Login Screen</h1>
                </div>
                <button className='button-primary-login' onClick={handleLogin}>
                    Login
                </button>
            </article>
        </main>
    )
}
