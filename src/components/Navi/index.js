import React from "react"
import {getLatestKey} from "../../common/utils/storage";
import {NaviWrapper} from "./style"

function Navi(props) {
    const {title, index, onNext, onPrev} = props
    const onLeft = () => {
        if (isLatest()) {
            return
        }
        onNext(index)
    }
    const onRight = () => {
        if (isFirst()) {
            return
        }
        onPrev(index)
    }
    const isLatest = () => {
        let latest = parseInt(getLatestKey())
        return index === latest ? true : false
    }

    const isFirst = () => {
        return index === 1 ? true : false
    }
    return (
        <NaviWrapper>
            <div className="container">
                <span onClick={onLeft} className={`iconfont icon-left ${isLatest() ? 'active' : ''}`}></span>
                <span className="text">{title}</span>
                <span onClick={onRight} className={`iconfont icon-playfill ${isFirst()?'active' : ''}`}></span>
            </div>
        </NaviWrapper>
    )
}

export default React.memo(Navi)
