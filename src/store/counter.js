// type
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// action
export const increment = (val) => ({
  type: INCREMENT,
  payload: val,
});

export const decrement = (val) => ({
  type: DECREMENT,
  payload: val,
});

// reducer
const initialState = {
  count: 0,
};

export function counter(state=initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {...state, count: state.count + action.payload};
    case DECREMENT:
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
}