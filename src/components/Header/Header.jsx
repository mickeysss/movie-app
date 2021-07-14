import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink to={'/search'}
                >
                    <h1>Поиск фильмов</h1>
                </NavLink>
                <NavLink to={'/rated'}>
                    <h1>Рейтинговые фильмы</h1>
                </NavLink>
                <NavLink to={'/about'}>
                    <h1>О приложении</h1>
                </NavLink>

            </nav>
        </div>
    )
}

export default Header