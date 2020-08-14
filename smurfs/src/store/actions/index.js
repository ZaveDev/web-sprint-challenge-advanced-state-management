import axios from 'axios'

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const fetchSmurfs = () => (dispatch) => {
  dispatch({type: FETCH_SMURF_START})
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => console.log(err))
}

export const CLEAR_FORM = 'CLEAR_FORM'
export const postSmurf = (smurf) => (dispatch) => {
  console.log(smurf);
  axios
    .post('http://localhost:3333/smurfs', {
      "name":`${smurf.name}`,
      "age":`${smurf.age}`,
      "height":`${smurf.height}`
    })
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
      dispatch({ type: CLEAR_FORM })
    })
    .catch(err => console.log(err))
}

const thunk = store => next => action => {
  if (typeof action === 'object') {
    next(action)
  } else if (typeof action  === 'function') {
    action(store.dispatch())
  }
}
