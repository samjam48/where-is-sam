import axios from 'axios';

export function fetchLocations() {
  return (dispatch, getState) => {
    axios.get('/api/locations')
     .then((response) => {
       dispatch({ type: 'FETCH_LOCATIONS_FULFILLED', payload: response.data });
     })
     .catch((err) => {
       dispatch({ type: 'FETCH_LOCATIONS_REJECTED', payload: err });
     });
  }
}
