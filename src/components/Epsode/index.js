import React from "react"
import {EpsodeContainer, IndexWrapper, DeteWrapper} from './style'

function Epsode() {
    return (
        <EpsodeContainer>
            <IndexWrapper>
                <span className='desc'>No</span>
                <span className='index'>08</span>
            </IndexWrapper>
            <DeteWrapper>
                <div className='month'>十二月</div>
                <div className='year'>2019</div>
            </DeteWrapper>
        </EpsodeContainer>
    )
}

export default Epsode