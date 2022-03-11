import React from 'react';
import "./error.css"

function Error({Message}) {
  return (
    <div className={`${Message?.type} Error`} >
        <p>{Message?.info} Retry</p>
    </div>
  )
}

export default Error;