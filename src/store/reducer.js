import {
    combineReducers
} from 'redux-immutable'
import {reducer as ClassicReducer} from '../pages/Classic/store/'

const reducer = combineReducers({
    classic:ClassicReducer
})
export default reducer