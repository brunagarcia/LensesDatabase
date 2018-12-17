import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
//import compose to add-combine multiple store enhances. 
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Store/Reducers/rootReducer'
import { Provider } from 'react-redux'
//packages to work with redux and firestore.
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reduxReactFirebase, getFirebase, reactReduxFirebase } from 'react-redux-firebase'
//Middleware from action dispatch to reducer. **Async**
import thunk from 'redux-thunk'
import fbConfig from '../src/config/fbConfig'


const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
    )
  );

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
