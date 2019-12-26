import React from "react"
import {MovieContainer} from "./style"
import movieTag from './images/movie-tag.png'

function Movie() {
    return (
        <MovieContainer>
            <img src="" alt=""/>
            <img className='tag' src={movieTag}  alt=''/>
        </MovieContainer>
    )
}

export default Movie
