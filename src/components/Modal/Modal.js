import React from 'react';
import './Modal.css';
import Backdrop from './Backdrop';
import {imageUrl} from '../../constants/constants'

function Modal(props) {
    const url = imageUrl+ props.movie.backdrop_path;
    const backgroundStyle = {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: "right",
            backgroundRepeat:"no-repeat"
    }
    return (
        <div>
            <Backdrop show={props.show} toggleBackdrop={props.close}  />
            <div
                style={(props.youtubeID ? null : backgroundStyle )}
                className={(props.show ? "modal show" : "modal hide")}
            >
                { props.children}
             {   console.log(props.children.movie)}
            </div>
        </div>
    )
}

export default Modal
