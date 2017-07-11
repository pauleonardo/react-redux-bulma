import {
  FETCH_LIST_INIT,
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE
} from '../actions/types';

import initialState from './initialState';

export default function viewListReducer( state = initialState.viewList, action){
  switch (action.type) {
    case FETCH_LIST_INIT:
      return {
        ...state,
        loading: true,
        error:null,
      };
    case FETCH_LIST_SUCCESS:
        return{
          ...state,
          loading:false,
          error:null,
          list:action.payload
        };
    case FETCH_LIST_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
          list:[]
        };
    default:
        return state;
  }
}
