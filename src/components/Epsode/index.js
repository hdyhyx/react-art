import React from "react"
import {EpsodeContainer, IndexWrapper, DeteWrapper} from './style'

function Epsode(props) {
    const index=props.index
    return (
        <EpsodeContainer>
            <IndexWrapper>
                <span className='desc'>No.</span>
                <span className='index'>{index}</span>
            </IndexWrapper>
            <DeteWrapper>
                <div className='month'>十二月</div>
                <div className='year'>2019</div>
            </DeteWrapper>
        </EpsodeContainer>
    )
}

export default React.memo(Epsode)