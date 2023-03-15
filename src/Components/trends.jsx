import React, {Fragment, useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {Container} from './navbar';
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'; 
import NoImg from '../images/No Image.png';
import "../Styles/videos.css";
import TrailerTrending from "../Assets/TrailerTrending";

function Trends(){
    const {toggle} = useContext(Container);
    const api = 'https://api.themoviedb.org/3'
    const TrendsShown = '/trending/all/week'

    const [trendArray, setTrendArray] = useState([]) 
    const [trendTitle,setTrendTitle] = useState('')

    const images='https://image.tmdb.org/t/p/w500'

    const [trailer,setTrailer] = useState(true);

    const Trends = async()=>{
        const data = await axios.get(`${api}${TrendsShown}`,{
        params: {
            api_key: '8a4507fe36fccea9e5f231b4928e96f5',
        }
        })
        const results = data.data.results;
        setTrendArray(results);
    }

    useEffect(()=>{
        setTimeout(()=>{
            Trends()
        },100)
    },[])

    const TrendTitle = (trend)=>{
        setTrendTitle(trend.title)
        setTrailer(!trailer)
    }

    return(
        <Fragment>
            <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
                <div className = "movies-container">
                    {trendArray.map((trend)=>{
                        return(
                            <Fragment>
                                <div id={trailer ? 'container' : 'NoContainer'}>
                                    <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={()=>TrendTitle(trend)}/>
                                    <img src={trend.poster_path ? `${images}${trend.poster_path}` : NoImg} alt='' onClick={()=>TrendTitle(trend)} />
                                    <h3 id="smaller-text" className={toggle ? 'mainColor' : 'secondaryColor'}>{trend.title}</h3> 
                                </div>
                            </Fragment>
                        )
                    })}
                    {trailer ? console.log : <TrailerTrending TrendTitle={trendTitle}/>}
                    <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeColor'} fontSize={55} color='#fff' cursor={'pointer'} onClick={()=>setTrailer(true)}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Trends;