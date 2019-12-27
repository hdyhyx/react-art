import React from "react";
import {LikeContainer, Count} from "./style"


function Like(props) {
    const {onLike, like, count} = props
    const onChangeLike=()=>{
        onLike(like,count)
    }
    return (
        <LikeContainer onClick={onChangeLike}>
            <span className={`iconfont ${like ? 'icon-likefill' : 'icon-like'}`}></span>
            <Count>{count}</Count>
        </LikeContainer>
    )
}

export default React.memo(Like)