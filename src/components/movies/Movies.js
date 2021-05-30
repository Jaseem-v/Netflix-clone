import React from 'react'
import './movies.css'
import { useState, useEffect } from 'react';
import axios from '../../axios';
import MovieCard from './MovieCard';

function Movies({ url, title, sizeSmall }) {
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get(url).then((response) => {
            var newArray = response.data.results.map(obj => ({ ...obj, isShowing: false, simpleId: Date.now() }))
            setCard(newArray)
        })
    }, [])


    return (
        <div className="movies">
            <div className="catogary-title">
                <h1>{title}</h1>
            </div>
            <div className="movies-card" >

                {card.map((obj, index) => (
                            <MovieCard obj={obj} key={index} setCard={setCard} card={card} sizeSmall={sizeSmall} />
                )
                )}
            </div>
        </div>
    )
}

export default Movies
