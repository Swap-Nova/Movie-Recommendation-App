import React, { useState } from 'react';

import { Fragment } from 'react'; // Fragments lets us group a list of children without adding extra nodes toß DOM.
import PageviewIcon from '@mui/icons-material/Pageview';
import '../Styles/navbar.css';
import {Routes,Route, NavLink} from 'react-router-dom';

import Movies from './movies';
import Shows from './shows';
import Trends from './trends';
import Pricing from './pricing';

export const Container = React.createContext(); //global container- for theme prop generally

function NavBar(){

    const [toggle, setToggle] = useState(true); 
    const [inputValue, setInputValue] = useState('');

    return(
        <Container.Provider value={{toggle, inputValue}}>
            <Fragment>

                <nav className={toggle ? '' : 'navBarColor'}>
                    <div className="nav-options">
                        <h1 id={toggle ? '':'heading'}>Night Owl</h1>

                        <NavLink to="" style={({isActive})=>{return {color:isActive ? '#fff' : '#EE9B00'}}}>
                            <span id={toggle ? 'Movies':'MoviesLight'}>Movies</span>
                        </NavLink>
                        <NavLink to="/Shows" style={({isActive})=>{return {color:isActive ? '#fff' : '#EE9B00'}}}>
                            <span id={toggle ? 'Movies':'MoviesLight'}>TV Shows</span>
                        </NavLink>
                        <NavLink to="/Trends" style={({isActive})=>{return {color:isActive ? '#fff' : '#EE9B00'}}}>
                            <span id={toggle ? 'Movies':'MoviesLight'}>Trending</span> 
                        </NavLink>
                        <NavLink to="/Pricing" style={({isActive})=>{return {color:isActive ? '#fff' : '#EE9B00'}}}>
                            <span id={toggle ? 'Movies':'MoviesLight'}>Pricing</span>
                        </NavLink>

                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Binge Watch Something?" onChange={(e)=>setInputValue(e.target.value)}></input>
                        <PageviewIcon id="search" color="green" />
                    </div>

                    <div id="color-switcher" onClick={()=>setToggle(!toggle)}>
                        <div id={toggle ? 'color-switcher-mover' : 'color-switcher-moved'}>
                        </div>
                    </div>

                </nav>
                
                <Routes>
                    <Route path='' element={<Movies />} ></Route>
                    <Route path='Shows' element={<Shows />}></Route>
                    <Route path='Trends' element={<Trends />}></Route>
                    <Route path='Pricing' element={<Pricing />}></Route>
                </Routes>

            </Fragment>
        </Container.Provider>
    )
}

export default NavBar;