import {EMPLOYEES_FETCH_SUCCESS, FETCHING_DATA} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  employees_data: ''
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {...state, loading: true}
    case EMPLOYEES_FETCH_SUCCESS:
      return {...state, employees_data: action.payload, loading: false}
    default:
      return state
  }
}
