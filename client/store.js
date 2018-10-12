import { CreateStore, applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootreducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;