import React from 'react';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './router';

export default class App extends React.Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCDd8T5DCmxWWzCPoyu5u_lUeOJXZMCpZ8",
      authDomain: "manager-49b4a.firebaseapp.com",
      databaseURL: "https://manager-49b4a.firebaseio.com",
      projectId: "manager-49b4a",
      storageBucket: "manager-49b4a.appspot.com",
      messagingSenderId: "698489400697"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}
