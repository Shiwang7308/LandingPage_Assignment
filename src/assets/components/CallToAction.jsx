import React from 'react'
import '../css/callToAction.css'
import callToAction from '../img/Call_to_Action.jpg'
function CallToAction() {
  return (
    <div className='callToActionConatiner'>
        <img src = {callToAction} alt = 'callToAction' />
    </div>
  )
}

export default CallToAction
