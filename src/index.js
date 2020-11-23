import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './redux/reducers/rootReducer';
import thunk from 'redux-thunk'

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
