import React, {Fragment, useEffect, useState, useContext} from 'react';
import axios from 'axios';

import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'; 
import NoImg from '../images/No Image.png';
import '../Styles/videos.css';

import {Container} from './navbar';
import TrailerMovies from "../Assets/TrailerMovies";

// require("dotenv").config();

function Movies(){

    const {toggle,inputValue} = useContext(Container)
    const input = inputValue
    const shown = input ? 'search' : 'discover'
    // env.config( {path: "../.env"});

    const [moviesData,setMoviesData] = useState([])
    const [trailer,setTrailer]=useState(true)
    const [movieTitle,setMovieTitle] = useState('')
    const api=`https://api.themoviedb.org/3/${shown}/movie`
    const images='https://image.tmdb.org/t/p/w500'

    const MovieCall = async ()=>{
        const data = await axios.get(api,{
            params: {
                // api_key: process.env.api_key,
                api_key:'8a4507fe36fccea9e5f231b4928e96f5',
                query:input
            }
        })
        // console.log(data);
        const results = data.data.results
        setMoviesData(results)
    }

    useEffect(()=>{
        setTimeout(()=>{
            MovieCall()
        },100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[input])
    console.log(moviesData);

    const MoviesTitle= (movie)=>{
        setMovieTitle(movie.title)
        setTrailer(!trailer)
    }

    return(
        <Fragment>
            <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
                <div className="movies-container">
                    {moviesData.map((movie)=>{
                        return(
                            <Fragment>
                                <div id={trailer ? 'container' : 'NoContainer'}>
                                    <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={()=>MoviesTitle(movie)}/>
                                    <img src={movie.poster_path ? `${images}${movie.poster_path}` : NoImg} alt='' onClick={()=>MoviesTitle(movie)} />
                                    <h3 id={movie.title.length>28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>{movie.title}</h3> 
                                </div>
                            </Fragment>
                        )
                    })}

                    {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle} />}
                    <AiOutlineClose id={toggle ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color='#fff' cursor={'pointer'} onClick={()=>setTrailer(true)} />
                </div>
            </div>
        </Fragment>
    )
}

export default Movies;