import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-state";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
const rerenderReactt = (userdata) => {
  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
      <App user={userdata} dispatch={store.dispatch.bind(store)} />
      </Provider>
   </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderReactt(store.getState())

// store.subscribe(() => {
//   let userdata = store.getState()
//   rerenderReactt(userdata);
// })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
