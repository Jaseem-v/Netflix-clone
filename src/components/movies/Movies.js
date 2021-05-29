import React from 'react'
import './movies.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState, useEffect } from 'react';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants'
import Youtube from "react-youtube"
import Modal from '../Modal/Modal';
import ModalDetails from '../Modal/ModalDetails';

function Movies({ url, title, sizeSmall }) {
    const [card, setCard] = useState([])
    const [youtubeID, setYoutubeID] = useState('')
    useEffect(() => {
        axios.get(url).then((response) => {
            setCard(response.data.results,{isShowing:false})
        })
    }, [])

    const youtubeHandler = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setYoutubeID(response.data.results[0])
            } else {
                console.log("array empty")
            }
        })


    }
    console.log(youtubeID);
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

   const  onOpen = (movie) => {
        setCard({ isShowing: true })
    }

   const  onClose = () => {
        setCard({ isShowing: false })
    }

    const   onClickEvent = (obj) => {
        // return(
        //         <Modal
        //             show={isShowing}
        //             close={onClose}
        //             movie={obj}

        //         >
        //             <ModalDetails movie={movie}/>
        //         </Modal>
        // )
    }

    return (
        <div className="movies">
            <div className="catogary-title">
                <h1>{title}</h1>
            </div>
            <div className="movies-card" >
                {/* <OwlCarousel item={8} margin={5} mouseDrag={true} loop={false} dots={false}> */}

                {card.map((obj, index) => (
                    <img onClick={() => onClickEvent(obj)} className={sizeSmall ? "small" : "big"} src={`${imageUrl + obj.backdrop_path}`} alt="" key={index} />
                )
                )}

                {/* </OwlCarousel> */}
            </div>
            <div className="youtube">
                {youtubeID && <Youtube videoId={youtubeID.key} opts={opts} />}

            </div>


        </div>
    )
}

export default Movies
