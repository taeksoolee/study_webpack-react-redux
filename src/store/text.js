// type
const CHANGE = 'text/CHANGE';

// action
export const change = (val) => ({
  type: CHANGE,
  payload: val,
});

// reducer
const initialState = {
  text: '',
};

export function text(state=initialState, action) {
  switch(action.type) {
    case CHANGE:
      return {...state, text: action.payload};
    default:
      return state;
  }
}