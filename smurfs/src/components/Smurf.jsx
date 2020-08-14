import React from 'react'

const Smurf = ({smurf}) => {
  console.log(smurf);
  return (
    <div className='smurf'>
      <h4>Name: {smurf.name}</h4>
      <h4>Age: {smurf.age}</h4>
      <h4>Height: {smurf.height}</h4>
    </div>
  );
}

export default Smurf;
