import React from 'react'

export default function MapItem({map}) {
  return (
    <>
    <div className='mapCard'> 
      <div className='mapInfo'>
        <img className='mapImg' src={map.splash} alt="" />
        <p className='mapName'>{map.displayName}</p>
        <p className='mapCor'>{map.coordinates}</p>
      </div>
      
    </div>
    </>
  )
}
