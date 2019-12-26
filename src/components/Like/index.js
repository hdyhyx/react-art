import React from "react";
import {LikeContainer, Count} from "./style"


function Like(props) {
    const {onLike, like, count} = props
    return (
        <LikeContainer onClick={onLike}>
            <span className={`iconfont ${like ? 'icon-likefill' : 'icon-like'}`}></span>
            <Count>{count}</Count>
        </LikeContainer>
    )
}

export default Like