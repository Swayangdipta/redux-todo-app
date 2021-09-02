import {createStore,combineReducers} from 'redux'

import todos from './reducer/todo'
import myInfo from './reducer/myInfo'

const rootReducer = combineReducers({
    todos,
    myInfo
})

const store = createStore(rootReducer)

export default store