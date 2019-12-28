import {fromJS} from 'immutable'
import {Classic} from "../../../module/classic"

const classicHttp = new Classic()

//actionType
const CHANGE_CLASSIC = '/classic/CHANGE_CLASSIC'
const CHANGE_LIKE = '/classic/CHANGE_LIKE'


//actionCreator
const changeClassicLatest = (data) => ({
    type: CHANGE_CLASSIC,
    data: fromJS(data)
})

const changeClassicLike = (data) => ({
    type: CHANGE_LIKE,
    data: fromJS(data)
})


const getLatest = () => {
    return (dispatch) => {
        classicHttp.getLatest().then(res => {
            dispatch(changeClassicLatest(res))
        })
    }
}

const getClassLike = () => {
    return (dispatch) => {
        classicHttp.getLike().then(res => {
            dispatch(changeClassicLike(res))
        })
    }
}

const getClassic = (index,nextOrPrev) => {
    return(dispatch)=>{
        classicHttp.getClassic(index,nextOrPrev).then(res=>{
            dispatch(changeClassicLatest(res))
        })
    }
}

//reducer
const defaultState = fromJS({
    classic: {
        type: null,
        content: '',
        image: '',
        index: null,
        title: ''
    },
    like: {
        likeStatus: false,
        count: null,
        readOnly: true
    }
})

function likeFormat(data) {
    return fromJS({
        likeStatus: data.get('likeStatus'),
        count: data.get('favNums'),
        readOnly: true
    })
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CLASSIC:
            return state.merge({
                classic: action.data,
                like: likeFormat(action.data)
            })
        case CHANGE_LIKE:
            return state.set('like', action.data)
        default:
            return state
    }
}

export {reducer, getLatest, getClassLike,getClassic}
