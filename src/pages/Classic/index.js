import React, {useState, useCallback, useEffect} from "react";
import {ClassicContaiber, HeadContainer, LikeContainer} from "./style"
import {Classic as ClassicHttp} from "../../module/classic"
import Share from "../../components/Share"
import Epsode from "../../components/Epsode"
import Like from "../../components/Like"
import Navi from "../../components/Navi"
import Movie from "../../components/Classic/Movie/"
import Sentence from "../../components/Classic/Sentence"
import Music from "../../components/Classic/Music"

const requset = new ClassicHttp()
const Type = 200

function ClassicType(props) {
    const {type, onPlaying, playing} = props
    switch (type) {
        case 100:
            return <Movie/>
        case 200:
            return <Music onPlaying={onPlaying} playing={playing}/>
        case 300:
            return <Sentence/>
        default:
            return null
    }
}

function Classic() {
    const [like, setLike] = useState(() => {
        return {
            like: false,
            count: 1000,
            readOnly: true
        }
    })
    const [classicList,setClassicList]=useState({
        id:'',
        image:'',
        content:'',
        favNums:'',
        title:'',
        type:'',
        likeStatus:false,
        index: null,
    })
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        requset.getLatest().then(res=>{
            setClassicList(res)
        })
    }, [])

    const onLike = useCallback((like, count) => {
        count = like ? count - 1 : count + 1
        setLike(Like => {
            return {
                count,
                like: !like
            }
        })
    }, [like])

    const onPlaying = useCallback((playing) => {
        setPlaying(playing => !playing)
    }, [])

    const onNext = useCallback(() => {

    }, [])

    const onPrev = useCallback(() => {

    }, [])
    return (
        <ClassicContaiber>
            <HeadContainer>
                <Epsode index={classicList.index}/>
                <LikeContainer>
                    <Like onLike={onLike} {...like}/>
                    <Share/>
                </LikeContainer>
            </HeadContainer>
            <ClassicType type={classicList.type} onPlaying={onPlaying} playing={playing}/>
            <Navi onNext={onNext} onPrev={onPrev}/>
        </ClassicContaiber>
    )
}


export default React.memo(Classic)