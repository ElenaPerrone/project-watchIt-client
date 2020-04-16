import { createStore, combineReducers } from 'redux'
import appReducer from '../store/reducers'

const rootReducer = combineReducers({
  app: appReducer,
})

const configureStore = () => {
  return createStore(
    rootReducer,
  )
}

export default configureStore