//React
import React, { useState } from 'react'

//Components
import Pulse from './small/Pulse'

function Index() {
  const small = new URL(window.location.href).searchParams.get('small');
  
  return (
    <>
      {small === 'stroke' ? <Pulse /> : (small === 'pulse' ? <Pulse /> : <Pulse />)
      }
    </>
  )
}

export default Index