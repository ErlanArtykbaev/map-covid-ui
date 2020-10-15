import React from 'react'

const PopupRow = (props) => {
  return(
    <div className='popup-row'>
      <div className='left'>
        <img src={props.icon} alt='icon' className='popup-row-icon' />
        {props.leftInfo}
      </div>
      <div className='right'>
        {props.rightInfo}
      </div>
    </div>
  )
}

export default PopupRow