import { FETCH_SMURF_START,FETCH_SMURF_SUCCESS, CLEAR_FORM } from '../actions'
const initalState = {
  smurfs: [],
  isLoading: true,
  error: '',
  form: {
    name: '',
    age: 0,
    height: '0cm'
  }
}

export const villageReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      }
    case 'HANDLE_ONCHANGE':
      return{
        ...state,
        form: {
          ...state.form,
          [action.field]: action.payload
        }
      }
    case CLEAR_FORM:
      return{
        ...state,
        form: initalState.form
      }
    default:
      return state
  }
}