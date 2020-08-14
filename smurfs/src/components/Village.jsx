import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store'

import Smurf from './Smurf'

const Village = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchSmurfs()
  }, [props.smurfs.length])

  return (
    <>

      <h1>The Smurf Village</h1>

      {props.isLoading 
        ? <h4> Lining up Smurfs...</h4> 
        : null
      }

      {props.error
        ? <p style={{color: 'red'}}> {props.error}</p>
        : null
      }

      <div className="smurf-container">
        {props.smurfs.length > 0
          ? props.smurfs.map(smurf => {
              return(
                <Smurf smurf={smurf}/>
              )
            })
          : null
        }
      </div>

    </>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(Village)
