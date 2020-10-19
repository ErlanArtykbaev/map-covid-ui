import React from 'react'

const DescriptionRow = (props) => {
  return(
    <div className='description-row'>
      <img src={props.icon} alt='icon' className='description-icon' />
      <div className='description-text'>
        {props.text}
      </div>
    </div>
  )
}

export default DescriptionRow