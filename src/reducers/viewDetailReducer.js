import{
  DETAIL_INIT,
  DETAIL_SELECTED,
  DETAIL_SELECT_NEXT,
  DETAIL_SELECT_PREVIOUS
} from '../actions/types';

import initialState from './initialState';

export default function viewDetailReducer( state = initialState.viewDetail, action){
  switch (action.type) {
    case DETAIL_INIT:
        return{
          ...state,
          loading: true,
          error:null,
        }
    case DETAIL_SELECTED:{
      return {
          ...state,
          loading:false,
          error:null,
          name:action.payload.name,
          id:action.payload.id,
          email:action.payload.email,
          users:( (action.payload.users) ? action.payload.users : [] )
        }
    }
    case DETAIL_SELECT_NEXT:{
      return {
          ...state,
          loading:false,
          error:null,
          name:action.payload.name,
          id:action.payload.id,
          email:action.payload.email,
          users:( (action.payload.users) ? action.payload.users : [] )
        }
    }
    case DETAIL_SELECT_PREVIOUS:{
      return {
          ...state,
          loading:false,
          error:null,
          name:action.payload.name,
          id:action.payload.id,
          email:action.payload.email,
          users:( (action.payload.users) ? action.payload.users : [] )
        }
    }
    default:
      return state;
  }
}
