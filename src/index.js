import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import DevTools from './DevTools';
import Routes from './App/Routes';
import reducer from './App/reducer';

const ENVIRONMENT = process.env.NODE_ENV;

let enhancer;

if (ENVIRONMENT === 'development') {
  enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument({
      maxAge: 20,
      shouldCatchErrors: true,
    }),
  );
} else {
  enhancer = compose(applyMiddleware(thunk));
}

const store = createStore(reducer, enhancer);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <span>
        <Routes />
        {ENVIRONMENT === 'development' ? <DevTools /> : null}
      </span>
    </Provider>,
    document.getElementById('root'),
  )
})
registerServiceWorker();
