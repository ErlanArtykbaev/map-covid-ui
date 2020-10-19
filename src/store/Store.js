import React, { useState } from 'react'
import { createContext } from "react";

export const StoreContext = createContext()

export const StoreProvider = (props) => {
  const [stations, setStations] = useState([
    {
      id: 0,
      title: 'first',
      latitude: 42.842126,
      longitude: 74.611047,
      info: [
        {
          a: 'Номер телефона:',
          b: '0999778832'
        },
        {
          a: 'Номер телефона:',
          b: '0999778832'
        },
        {
          a: 'Номер телефона:',
          b: '0999778832'
        }
      ]
    },
    {
      id: 1,
      title: 'second',
      latitude: 42.873939,
      longitude: 74.599452,
      info: [
        {
          a: 'Номер телефона:',
          b: '0999778832'
        },
        {
          a: 'Номер телефона:',
          b: '0999778832'
        },
        {
          a: 'Номер телефона:',
          b: '0999778832'
        }
      ]
    }
  ])

  return(
    <StoreContext.Provider value={[stations, setStations]}>
      {props.children}
    </StoreContext.Provider>
  )
}