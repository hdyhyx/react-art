import React from "react"
import {MusicWrapper, CdWrapper} from "./style"
import pauseImage from './images/player-waitting.png'
import playingImage from './images/player-playing.png'
import tagImage from './images/music-tag.png'
import needleImage from './images/needle.png'
import cdImage from './images/disc.png'


function Music(props) {
    const {onPlaying, playing, content, image,} = props
    return (
        <MusicWrapper>
            <CdWrapper needleImage={needleImage} cdImage={cdImage}>
                <div className={`needle ${playing ? 'paying' : 'pause'}`}></div>
                <div className="cd">
                    <img
                        src={image}
                        className={`image play ${playing ? '' : 'pause'}`}
                        alt=""
                    />
                    <img
                        className='playing-img'
                        src={playing ? playingImage : pauseImage}
                        onClick={onPlaying}
                        alt=""
                    />
                </div>
            </CdWrapper>
            <img className="tag" src={tagImage} alt=""/>
            <span className="text">{content}</span>
        </MusicWrapper>
    )
}

export default React.memo(Music)