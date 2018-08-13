import React, { Component } from 'react';
import Counter from './Counter';
import CounterButtons from './CounterButtons';
import { combineReducers, createStore, compose } from 'redux'
import counterReducer from './store'
import { Provider } from 'react-redux'

const reducers= combineReducers({
  counter: counterReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers();

const store = createStore(reducers, enhancer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Counter />
        <CounterButtons/>
      </div>
      </Provider>
    );
  }
}

export default App;
