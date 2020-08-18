import { createStore } from 'redux'
import { alertReducer } from './alertReducer'

export const store = createStore(
    alertReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


