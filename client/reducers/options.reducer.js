import { fromJS } from 'immutable';

const defaultOptions = fromJS({
  initialDate: undefined,
  finalDate: undefined,
});

export default function reducer(state = defaultOptions, action) {
  switch (action.type) {
    default:
      return state;
  }
}
