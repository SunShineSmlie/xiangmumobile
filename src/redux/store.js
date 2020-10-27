import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {
  composeWithDevTools
} from 'redux-devtools-extendsion'

import reducers from './reducers'

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV === 'development') {
  middleware = composeWithDevTools(middleware)
}

export default createStore(reducers, middleware)