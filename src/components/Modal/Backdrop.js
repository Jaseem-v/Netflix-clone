import React from 'react';
import './Modal.css'

function Backdrop(props) {
    return (
        <div>
    props.show ? <div className="backdrop" onClick={props.toggleBackdrop}></div> : null
            
        </div>
    )
}

export default Backdrop
