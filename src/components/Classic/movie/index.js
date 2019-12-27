import React from "react"
import {MovieContainer} from "./style"
import movieTag from './images/movie-tag.png'

const imageUrl='http://116.62.24.137/images/movie.8.png'
function Movie() {
  return (
        <MovieContainer>
            <img className="image" src={imageUrl} alt=""/>
            <img className="tag" src={movieTag}  alt=""/>
            <span className="text">人生不能像做菜，把所有的料准备好才下锅</span>
        </MovieContainer>
    )
}

export default React.memo(Movie)
