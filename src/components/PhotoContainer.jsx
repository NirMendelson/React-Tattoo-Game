import React from 'react';
import PhotoElement from './PhotoElement';
import "./PhotoContainer.css"
import ImageData from "../ImageData"

function PhotoContainer() {
    return (
        <div className='container'>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>
            <PhotoElement img={ImageData[0].img} name={ImageData[0].name}/>

        </div>
    );
}

export default PhotoContainer;