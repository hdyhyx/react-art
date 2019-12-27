import React from "react"
import {ShareContainer} from "./style"

function Share() {
    return(
        <ShareContainer>
            <span className="iconfont icon-share"></span>
        </ShareContainer>
    )
}

export default React.memo(Share)