import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl'

const REACT_APP_MAPBOX_TOKEN = "pk.eyJ1IjoiZXJpazI0MDUiLCJhIjoiY2tnOTdvbGhkMGtubTJ3bzM2NWUyMXloMCJ9.cqCEXKKceOFtf3AJCrgPdQ"

const MapGl = () => {
  const [viewport, setViewport] = useState({
    latitude: 42.874333,
    longitude: 74.590139,
    width: '100vw',
    height: '100vh',
    zoom: 12
  })

  return (
    <ReactMapGl 
      {...viewport}
      onViewportChange={viewport => setViewport(viewport)}
      mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
    >
    </ReactMapGl>
  )
}

export default MapGl