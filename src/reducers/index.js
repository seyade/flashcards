import { combineReducers } from 'redux';
import { bake_cookie, read_cookie } from 'sfcookies';
import { SET_STACK, LOAD_STACKS, ADD_STACK, CLEAR_STACKS } from '../actions';

const COOKIES_KEY = 'flashcards';

function stack(state = {}, action) {
  switch (action.type) {
    case SET_STACK:
      return action.stack;

    default:
      return state;
  }
}

function stacks(state = [], action) {
  switch (action.type) {
    case LOAD_STACKS:
      return action.stacks;

    case ADD_STACK:
      bake_cookie(COOKIES_KEY, [
        ...state,
        { ...action.stack, id: state.length },
      ]);

      return [...state, { ...action.stack, id: state.length }];

    case CLEAR_STACKS:
      return [];

    default:
      return state;
  }
}

export default combineReducers({
  stack,
  stacks,
});
