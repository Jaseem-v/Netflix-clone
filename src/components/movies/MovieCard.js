import React from 'react'
import { imageUrl } from "../../constants/constants"
import Modal from '../Modal/Modal'
import ModalDetails from '../Modal/ModalDetails'
import { useState } from 'react';

function MovieCard({ obj, key, setCard, card, sizeSmall }) {
    const [youtubeID, setYoutubeID] = useState('')

    const onClickEvent = (e) => {
        setCard(card.filter(el => {
            if (el.simpleId === obj.simpleId) {
                obj.isShowing = true
            }
            return obj
        }))
    }
    const onClose = () => {
        setCard(card.filter(el => {
            if (el.simpleId === obj.simpleId) {
                obj.isShowing = false
            }
            return obj
        }))
        setYoutubeID("")
    }
    return (
        <div>
            <img onClick={onClickEvent} className={sizeSmall ? "small" : "big"} src={`${imageUrl + obj.backdrop_path}`} alt="" key={key} />
            {obj.isShowing ? <Modal
                show={obj.isShowing}
                close={onClose}
                movie={obj}
                youtubeID={youtubeID}
                setYoutubeID={setYoutubeID}
            >
                <ModalDetails movie={obj} youtubeID={youtubeID} setYoutubeID={setYoutubeID} />
            </Modal> : null}
        </div>
    )
}

export default MovieCard
