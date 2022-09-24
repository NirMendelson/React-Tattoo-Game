import React from "react";
import "./PhotoElement.css";

function PhotoElement(props) {
    return (
        <div>
        <a>
            <img
            src={props.img}
            alt={props.name}>
            </img>
        </a>
        </div>
    );
}

export default PhotoElement;