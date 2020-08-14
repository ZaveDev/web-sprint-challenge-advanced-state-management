import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'
import { postSmurf } from '../store'

const SumrfAdderForm = ({name, age, height, postSmurf}) => {
  const dispatch = useDispatch()
  const hOSubmit = (e) => {
    e.preventDefault()
    postSmurf({name: name, age: age, height: height})
  }


  return (
    <div>
      <form>
        <label> Name
          <input
            type='text'
            name='name'
            value={name}
            onChange={e => dispatch({ type: 'HANDLE_ONCHANGE', field:'name', payload: e.target.value})}
          />
        </label>

        <label> Age
          <input
            type='text'
            name='age'
            value={age}
            onChange={e => dispatch({ type: 'HANDLE_ONCHANGE', field:'age', payload: e.target.value})}
          />
        </label>

        <label> Height 
          <input
            type='text'
            name='height'
            value={height}
            onChange={e => dispatch({ type: 'HANDLE_ONCHANGE', field:'height', payload: e.target.value})}
          />
        </label>

        <button onClick={hOSubmit}>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    name: state.form.name,
    age: state.form.age,
    height: state.form.height
  }
}
export default connect(mapStateToProps, {postSmurf})(SumrfAdderForm) 