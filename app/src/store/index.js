import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducers from './reducers'
/**
 * Sets up the application Store, composed by redux and redux-saga
 */
const sagaMiddleware = createSagaMiddleware()

const Store = createStore(
  reducers,
  applyMiddleware(
    sagaMiddleware,
  )
)
sagaMiddleware.run(sagas)

export default Store
