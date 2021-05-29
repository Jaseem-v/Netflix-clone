import React from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import "./Banner.css"
import { useState,useEffect } from 'react'
import axios from '../../axios'

function Banner() {
    const [movies, setMovies] = useState('')
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            const randomPick = response.data.results[Math.floor(Math.random()*response.data.results.length)]
            setMovies(randomPick)
        })
    }, [ ])
    return (
        <div>
            <div className="banner"  style={{backgroundImage:`url(${movies ? imageUrl +movies.backdrop_path : ""})`}}>
                <div className="left-shadow">
                    <div className="content">
                        <div className="title">
                            <h1>{movies ? movies.title ? movies.title : movies.name : ''} </h1>
                        </div>
                        <div className="discription">
                            <p>{ movies ? movies.overview : "" }</p>
                        </div>
                        <div className="cta">
                            <button className="btn play"><i className="fas fa-play"></i>Play</button>
                            <button className="btn mylist"><i className="fas fa-plus"></i>Mylist</button>
                        </div>
                    </div>
                </div>
            <div className="fade"></div>
            </div>
        </div>
    )
}

export default Banner
