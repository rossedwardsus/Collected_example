
import {createStore, applyMiddleware, Middleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default Store;