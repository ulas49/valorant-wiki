import {useContext}from 'react'
import { AppLevelContext} from '../../context/AppLevelContext'
import MapItem from './MapItem'
export default function MapList() {
    const {maps} = useContext(AppLevelContext)
    

  return (
    <div className='mapList'>
    {maps.map((map,idx)=><MapItem map={map} key={idx}  /> )}
 

    </div>
  )
}
