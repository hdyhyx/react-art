import React from "react"
import {NaviWrapper} from "./style"

function Navi() {
    return(
        <NaviWrapper>
            <div className="container">
                <span className="iconfont icon-left"></span>
                <span className="text">月之门《枫华谷的枫林》</span>
                <span className="iconfont icon-playfill"></span>
            </div>
        </NaviWrapper>
    )
}

export default React.memo(Navi)
