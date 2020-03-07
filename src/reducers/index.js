import { createStore as reduxCreateStore, combineReducers } from 'redux'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
    themeReducer,
})

const createStore = () => reduxCreateStore(rootReducer)
export default createStore
