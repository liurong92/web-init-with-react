import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import todoReducer from '../app/todo/todoReducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    todoReducer
})
