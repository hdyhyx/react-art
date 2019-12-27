import React from "react"
import {SentenceContainer} from "./style"
import SentenceTag from "./images/essay-tag.png";

const imageUrl='http://116.62.24.137/images/movie.8.png'
function Sentence() {
    return(
        <SentenceContainer>
            <img className="image" src={imageUrl} alt=""/>
            <img className="tag" src={SentenceTag}  alt=""/>
            <span className="text">人生不能像做菜，把所有的料准备好才下锅</span>
        </SentenceContainer>
    )
}

export default React.memo(Sentence)