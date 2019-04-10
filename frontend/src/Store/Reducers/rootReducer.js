import authReducer from './authReducer'
import newLensReducer from './newLensReducer'
import { combineReducers } from 'redux'
//Pre-made reducer - Sync Firestore with State
import { firestoreReducer } from 'redux-firestore'


const initState = {}

const rootReducer = combineReducers({
  auth: authReducer, 
  lens: newLensReducer, 
  database: firestoreReducer
})

export default rootReducer