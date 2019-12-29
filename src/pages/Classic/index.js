import React, {useState, useCallback, useEffect} from "react";
import {connect} from "react-redux"
import {getLatest, getClassLike, getClassic} from './store/index'
import {ClassicContaiber, HeadContainer, LikeContainer} from "./style"
import Share from "../../components/Share"
import Epsode from "../../components/Epsode"
import Like from "../../components/Like"
import Navi from "../../components/Navi"
import Movie from "../../components/Classic/Movie"
import Sentence from "../../components/Classic/Sentence"
import Music from "../../components/Classic/Music"


function ClassicType(props) {
    const {type, content, image, onPlaying, playing} = props
    switch (type) {
        case 100:
            return <Movie content={content} image={image}/>
        case 200:
            return <Music content={content} image={image} onPlaying={onPlaying} playing={playing}/>
        case 300:
            return <Sentence content={content} image={image}/>
        default:
            return null
    }
}

function Classic(props) {
    const {getLatestDispatch, getClassicDispatch, getLikeDispatch} = props
    const {classic, like} = props
    const [playing, setPlaying] = useState(false)
    const likeData = like.toJS()
    const {type, content, title, image, index} = classic.toJS()
    useEffect(() => {
        getLatestDispatch()
        // eslint-disable-next-line
    }, [])
    const onLike = useCallback((like, count) => {
        console.log(like,count)
        // count = like ? count - 1 : count + 1
        // setLike(Like => {
        //     return {
        //         count,
        //         like: !like
        //     }
        // })
    }, [])
    const onPlaying = useCallback((playing) => {
        setPlaying(playing => !playing)
    }, [])

    const onNext = useCallback((index) => {
        getClassicDispatch(index, 'next')
    }, [])

    const onPrev = useCallback((index) => {
        getClassicDispatch(index, 'prev')
    }, [])
    return (
        <ClassicContaiber>
            <HeadContainer>
                <Epsode index={index}/>
                <LikeContainer>
                    <Like onLike={onLike} {...likeData}/>
                    <Share/>
                </LikeContainer>
            </HeadContainer>
            <ClassicType type={type} content={content} image={image} onPlaying={onPlaying}
                         playing={playing}/>
            <Navi title={title} index={index} onNext={onNext} onPrev={onPrev}/>
        </ClassicContaiber>
    )
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    classic: state.getIn(['classic', 'classic']),
    like: state.getIn(['classic', 'like'])
});

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        getLatestDispatch() {
            dispatch(getLatest());
        },
        getLikeDispatch() {
            dispatch(getClassLike())
        },
        getClassicDispatch(index, nextOrPrev) {
            dispatch(getClassic(index, nextOrPrev))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Classic));