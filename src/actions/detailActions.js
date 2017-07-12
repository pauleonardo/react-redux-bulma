import {
  DETAIL_INIT,
  DETAIL_SELECTED,
  DETAIL_SELECT_NEXT,
  DETAIL_SELECT_PREVIOUS
} from './types';

export function selectItem(item){
  return {
    payload:item,
    type: DETAIL_SELECTED
  }
}

export function selectNextItem(item){
  return{
    payload:item,
    type: DETAIL_SELECT_NEXT
  }
}

export function selectPreviousItem(item){
  return{
    payload:item,
    type: DETAIL_SELECT_NEXT
  }
}
