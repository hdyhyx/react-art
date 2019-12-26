import React, {useState} from "react";
import {ClassicContaiber, HeadContainer, LikeContainer} from "./style"
import Share from "../../components/Share"
import Epsode from "../../components/Epsode"
import Like from "../../components/Like"
import Movie from "../../components/Classic/movie"

function Classic() {
    const [like, setLike] = useState(() => {
        return {
            like: false,
            count: 1000,
            readOnly: true
        }
    })
    const onLike = () => {
        const count = like.like ? like.count - 1 : like.count + 1
        setLike({
            count,
            like: !like.like
        })
    }

    return (
        <ClassicContaiber>
            <HeadContainer>
                <Epsode/>
                <LikeContainer>
                    <Like onLike={onLike} {...like}/>
                    <Share/>
                </LikeContainer>
            </HeadContainer>
            <Movie/>
        </ClassicContaiber>
    )
}

export default Classic