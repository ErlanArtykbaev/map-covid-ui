import React, { useContext, useState } from 'react'
import DescriptionRow from '../reusable/DescriptionRow'

import redLoc from '../../assets/img/red_mark_small.svg'
import yellowLoc from '../../assets/img/yellow_mark_small.svg'
import bedNight from '../../assets/img/bed_night_small.svg'
import bedLight from '../../assets/img/bed_mark_small.svg'
import redCircle from '../../assets/img/red_circle.svg'
import yellowCircle from '../../assets/img/yellow_circle.svg'
import {StoreContext} from '../../store/Store'


const Sidebar = () => {
  const [searchedOrganisation, setSearchedOrganisation] = useState(null)
  const [inputSearch, setInputSearch] = useState()

  const [stations, setStations] = useContext(StoreContext)

  return(
    <div className='sidebar'>
      <form className='form'>
        <label>
          <input type='checkbox' name='needs' checked />
          Учет потребностей
        </label>
        <label>
          <input type='checkbox' name='fund-bunks' checked />
          Учет коечного фонда
        </label>
        <label>
          <input type='checkbox' name='hospitals' checked />
          Стационары
        </label>
      </form>
      <div className='icons-description'>
        <DescriptionRow 
          icon={redLoc}
          text= ' - Стационары без свободных койко-мест'
        />
        <DescriptionRow 
          icon={yellowLoc}
          text= ' - Стационары со свободными койко-местами'
        />
        <DescriptionRow 
          icon={bedLight}
          text= ' - Дневные стационары'
        />
        <DescriptionRow 
          icon={bedNight}
          text= ' - Ночные стационары'
        />
      </div>
      <div className='stations-box'>
        <div className='stations-title'>
          Список организаций
        </div>
        <input
          type='text' 
          name='search-organisation' 
          className='search-organisation' 
          onChange={(e) => {
            setInputSearch(e.target.value)
          }}
        />
        <div className='stations'>
          {
            stations.map(item => (
              <div className='stations-item'>
                <img src={yellowCircle} className='item-icon'/>
                <div className='item-title'>{item.title}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar