import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOADING
  } from './types';
  
  import { Actions } from 'react-native-router-flux';

  import firebase from 'firebase';
  
  
  //email changed action
  export const emailChanged = (text) => {
    return {
      type: EMAIL_CHANGED ,
      payload: text
    }
  }
  
  //password changed action
  export const passwordChanged = (text) => {
    return {
      type: PASSWORD_CHANGED ,
      payload: text
    }
  }
  
  export const LoginUser = ({ email, password }) => {
    return (dispatch) => {
  
      dispatch({type: LOADING});
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => LoginUserSuccess(dispatch, user))
        .catch(()=> {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => LoginUserSuccess(dispatch, user))
            .catch(() => LoginUserFail(dispatch))
        })
    }
  }

  const LoginUserSuccess = (dispatch, user) => {
    dispatch({type: LOGIN_USER_SUCCESS, payload: user});
    Actions.main();

  }

  const LoginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL})
  }
  
