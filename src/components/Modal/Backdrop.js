import React from 'react';
import './Modal.css'

function Backdrop(props) {
    return (
        <div>
            { props.show ? <div className="backdrop" ></div> : null}
            <button className="btn-x" onClick={props.toggleBackdrop}>
                x
            </button>
        </div>
    )
}

export default Backdrop
