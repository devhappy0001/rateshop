import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configStore} from './services/store/store';

const store = configStore();
console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

