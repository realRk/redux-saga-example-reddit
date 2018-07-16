import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux'
import reditReducer from './reducers/redditreducer';
//saga
import {watchFetchURl} from'./saga/sagaForfetch';
import createSagaMiddleware from 'redux-saga';
//creating saga middleware
const sagaMiddleware = createSagaMiddleware()
// const reducers = combineReducers({text:reditReducer})

const store = createStore(reditReducer,
                          applyMiddleware(sagaMiddleware)
                        );

const allstoreenhancers = compose(
    //thunk needs to come first unless it won't work
    window.devToolsExtension && window.devToolsExtension()
);
sagaMiddleware.run(watchFetchURl)
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
