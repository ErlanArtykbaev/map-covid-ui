import React, { useContext, useState } from 'react'
import ReactMapGl, {Marker, Popup} from 'react-map-gl'

import location1 from '../assets/img/location.svg'
import { StoreContext } from '../store/Store'
import PopupRow from './UI/PopupRow'

const REACT_APP_MAPBOX_TOKEN = "pk.eyJ1IjoiZXJpazI0MDUiLCJhIjoiY2tnOTdvbGhkMGtubTJ3bzM2NWUyMXloMCJ9.cqCEXKKceOFtf3AJCrgPdQ"

const MapGl = () => {
  const [viewport, setViewport] = useState({
    latitude: 42.874333,
    longitude: 74.590139,
    width: '100vw',
    height: '92vh',
    zoom: 12
  })

  const [selectedItem, setSelectedItem] = useState(null)

  const [stations, setStations] = useContext(StoreContext)


  return (
    <ReactMapGl 
      {...viewport}
      onViewportChange={viewport => setViewport(viewport)}
      mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
      mapStyle='mapbox://styles/erik2405/ckg9auyjm7bv61as4y8yxyr3f'
      className='map'
    >
      {
        stations.map((item) => (
          <Marker
           key={item.name} 
           latitude={item.latitude} 
           longitude={item.longitude}
           className='marker'
          >
            <img 
              src={location1} 
              alt='location' 
              className='location' 
              onClick={e => {
                e.preventDefault()
                setSelectedItem(item)
              }}
            />
          </Marker>
        ))
      }
      {
        selectedItem ? (
          <Popup
            latitude={selectedItem.latitude}
            longitude={selectedItem.longitude}
            onClose={() => {
              setSelectedItem(null)
            }}
          >
            <div className='popup'>
              <div className='title'>title</div>
              <div className='more'>
                {
                  selectedItem.info.map(info => (
                    <PopupRow 
                      icon={location1}
                      leftInfo={info.a}
                      rightInfo={info.b}
                    />
                  ))
                }
              </div>
            </div>
          </Popup>
        )
        : null
      }
    </ReactMapGl>
  )
}

export default MapGl