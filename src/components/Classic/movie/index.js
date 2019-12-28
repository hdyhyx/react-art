import React from "react"
import {MovieContainer} from "./style"
import movieTag from './images/movie-tag.png'

function Movie(props) {
    const {content, image} = props
    return (
        <MovieContainer>
            <img className="image" src={image} alt=""/>
            <img className="tag" src={movieTag} alt=""/>
            <span className="text">{content}</span>
        </MovieContainer>
    )
}

export default React.memo(Movie)
