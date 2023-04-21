import React from 'react'
import "./Button.css";

const button = ({buttonMessage,buttonColor}) => {
  return (
    <div>
      <button className={buttonColor}>{buttonMessage}</button>
    </div>
  )
}

export default button
