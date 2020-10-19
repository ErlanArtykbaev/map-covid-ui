import React from 'react'

import Sidebar from '../layout/Sidebar'
import MapGl from '../MapGl' 

const Home = () => {
  return(
    <div className='main'>
      <MapGl />
      <Sidebar />
    </div>
  )
}

export default Home