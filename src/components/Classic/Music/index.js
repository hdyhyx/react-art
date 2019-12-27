import React from "react"
import {MusicWrapper, CdWrapper} from "./style"
import pauseImage from './images/player-waitting.png'
import playingImage from './images/player-playing.png'
import tagImage from './images/music-tag.png'
import needleImage from './images/needle.png'
import cdImage from './images/disc.png'

const MusicImage = 'http://p2.music.126.net/uxdTOFmK4yWik5QG0pQceA==/109951163304447575.jpg?param=400x400'

function Music(props) {
    const {onPlaying,playing}=props
    return (
        <MusicWrapper>
            <CdWrapper needleImage={needleImage} cdImage={cdImage}>
                <div className={`needle ${playing ? 'paying' : 'pause'}`}></div>
                <div className="cd">
                    <img
                        src={MusicImage}
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
            <span className="text">人生不能像做菜，把所有的料准备好才下锅</span>
        </MusicWrapper>
    )
}

export default React.memo(Music)