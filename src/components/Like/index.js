import React from "react";
import {LikeContainer, Count} from "./style"


function Like(props) {
    const {onLike, likeStatus, count} = props
    const onChangeLike=()=>{
        onLike(likeStatus,count)
    }
    return (
        <LikeContainer onClick={onChangeLike}>
            <span className={`iconfont ${likeStatus ? 'icon-likefill' : 'icon-like'}`}></span>
            <Count>{count}</Count>
        </LikeContainer>
    )
}

export default React.memo(Like)