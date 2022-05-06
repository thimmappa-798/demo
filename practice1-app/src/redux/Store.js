import {createStore} from 'redux'
import rootReducers from '../reducers/CombineReducer'

const store=createStore(rootReducers);

export default store