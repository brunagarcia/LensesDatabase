import authReducer from './authReducer'
import newLensReducer from './newLensReducer'
import { combineReducers } from 'redux'


const initState = {}

const rootReducer = combineReducers({
  auth: authReducer, 
  lens: newLensReducer, 
})

export default rootReducer