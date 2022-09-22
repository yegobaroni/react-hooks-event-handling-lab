// Code EyesOnMe Component Here

import React from 'react'

function EyesOnMe() {
 
    function handleFocus(){
        console.log('Good!');
    }

    function hadleBlur(){
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