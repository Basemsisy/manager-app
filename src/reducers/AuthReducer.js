import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOADING
} from '../actions/types';


const INITIAL_STATE = { 
  email: 'test@test.com', 
  password: '123456', 
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    
    case EMAIL_CHANGED:
      return {...state, email: action.payload};

    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
      
    case LOADING:
      return {...state, loading: true, error: ''};

    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};

      case LOGIN_USER_FAIL:
        return {...state, error: 'Authentcation faild', password: '', loading: false}
    default:
      return state;
  }
}