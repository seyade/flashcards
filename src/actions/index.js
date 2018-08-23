export const SET_STACK = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';
export const ADD_STACK = 'ADD_STACK';
export const CLEAR_STACKS = 'CLEAR_STACKS';

export function setStack(stack) {
  return {
    type: SET_STACK,
    stack,
  };
}

export function loadStack(stacks) {
  return {
    type: LOAD_STACKS,
    stacks,
  };
}

export function addStack(stack) {
  return {
    type: ADD_STACK,
    stack,
  };
}

export function clearStacks() {
  return {
    type: CLEAR_STACKS,
  };
}
