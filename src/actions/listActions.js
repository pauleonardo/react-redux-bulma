import {
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  FETCH_LIST_INIT
} from './types';

function fetchListSuccess(data){
  return {
    payload:data,
    type: FETCH_LIST_SUCCESS
  }
}

function fetchListFailure(error){
  return {
    payload:error,
    type: FETCH_LIST_FAILURE
  }
}

export function fetchList(){

    return async (dispatch) => {

      dispatch( () => {
        return{
          type: FETCH_LIST_INIT
        };
      })

      try {
        const res = await fetch('../assets/members.json');
        const data = await res.json();
        dispatch(fetchListSuccess(data))
      }
      catch (error) {
        dispatch(fetchListFailure(error))
      }


    }
}
