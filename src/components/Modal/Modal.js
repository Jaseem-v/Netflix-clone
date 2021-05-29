import React from 'react';
import './Modal.css';
import Backdrop from './Backdrop';
import {imageUrl} from '../../constants/constants'

function Modal(props) {
    const url = imageUrl+ props.obj.backdrop_path;
    const backgroundStyle = {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover'
    }
    return (
        <div>
            <Backdrop show={props.show} toggleBackdrop={props.close} />
            <div
                style={backgroundStyle}
                className={(props.show ? "modal show" : "modal hide")}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Modal
