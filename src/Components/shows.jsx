import React, {Fragment, useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'; 
import NoImg from '../images/No Image.png';
import {Container} from './navbar';
import "../Styles/videos.css"
import TrailerTvShows from '../Assets/TrailerTvShows';

function Shows(){

    const {toggle, inputValue} = useContext(Container)
    const input = inputValue
    const [showData, setShowData] = useState([])
    const [trailer, SetTrailer] = useState(true)
    const Shown = input ? 'search' : 'discover';
    const [title, setTitle] = useState(true)
    const api = `https://api.themoviedb.org/3/${Shown}/tv`
    const images='https://image.tmdb.org/t/p/w500'

    const Shows = async() => {
        const data = await axios.get(api,{
            params:{
                api_key:'8a4507fe36fccea9e5f231b4928e96f5',
                query:input
            }
        })
        const results = (data.data.results);
        setShowData(results);
    }
    useEffect(()=>{
        setTimeout(()=>{
            Shows()
        },100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[input])

    const TvShowTitle=(Shows)=>{
        setTitle(Shows.name)
        SetTrailer(!trailer)
    }

    return(
        <Fragment>
            <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
                <div className="movies-container">    
                    {showData.map((Shows)=>{
                        return(
                            <Fragment key={Shows.id}>
                                <div id={trailer ? 'container' : 'NoContainer'}>
                                    <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={()=>TvShowTitle(Shows)} />
                                    <img src={Shows.poster_path ? `${images}${Shows.poster_path}` : NoImg} alt='' onClick={()=>TvShowTitle(Shows)}/>
                                    <h3 id={Shows.name.length>28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>{Shows.name}</h3> 
                                </div>
                            </Fragment>
                        )
                    })}
                    {trailer ? console.log : <TrailerTvShows TvShowsTitle={title} />}
                    <AiOutlineClose id={toggle ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color='#fff' cursor={'pointer'} onClick={()=>SetTrailer(true)} />
                </div>
            </div>
        </Fragment>
    )
}

export default Shows;