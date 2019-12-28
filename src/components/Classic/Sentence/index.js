import React from "react"
import {SentenceContainer} from "./style"
import SentenceTag from "./images/essay-tag.png"

function Sentence(props) {
    const {content, image} = props
    return(
        <SentenceContainer>
            <img className="image" src={image} alt=""/>
            <img className="tag" src={SentenceTag}  alt=""/>
            <span className="text">{content}</span>
        </SentenceContainer>
    )
}

export default React.memo(Sentence)