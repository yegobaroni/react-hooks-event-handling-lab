// Code EyesOnMe Component Here

import React from 'react'

function EyesOnMe() {
 
    const handleFocus= ()=> {
        console.log('Good!');
    }

    const hadleBlur = () => {
        console.log('Hey! Eyes on me!');
    }

  return (
    <div>
        <button onFocus={handleFocus} onBlur={hadleBlur}>
            Eyes on me
        </button>
    </div>
  )
}

export default EyesOnMe;