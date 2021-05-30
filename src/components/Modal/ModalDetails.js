import React, { useState } from 'react'
import YouTube from 'react-youtube';
import './Modal.css';
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'

const ModalDetails = ({ movie,youtubeID,setYoutubeID }) => {
    const youtubeHandler = () => {
        axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setYoutubeID(response.data.results[0])
            } else {
                alert("oops no videos,Try another movie")
            }
        })
    }
    const opts = {
        width: '99%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="modal-details">
            <div className="modal-header">
                {movie.name || movie.title}
            </div>
            <div className="modal-overview">
                <div style={{ color: 'green', fontWeight: 'bold', marginRight: 6 }}>Rating {movie.vote_average}/10</div>
                <div>Release Date: {movie.first_air_date || movie.release_date}</div>
            </div>
            <div className="modal-body">
                {movie.overview}
            </div>
            <div className="modal-btn">
                <button className="btn1" onClick={youtubeHandler} >
                    <i className="play icon"></i> Play
                </button>
                <button className="btn2">
                    <i className="plus icon"></i> My list
                </button>
            </div>
            <div className="youtube">
                {youtubeID && <YouTube videoId={youtubeID.key} opts={opts} className={'youtube-iframer'}    id={"youtube-iframer"}  />}

            </div>
        </div>
    )
}

export default ModalDetails;
