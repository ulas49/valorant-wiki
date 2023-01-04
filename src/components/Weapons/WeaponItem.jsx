import React from 'react'

export default function WeaponItem({weapon}) {
  return (
    <div className='weaponCard'> 
      <div className='agentHeader'>
      <h3>{ weapon.displayName}</h3> 
    
      </div>
       <img src={weapon.displayIcon} alt="" />
       <div className="agentInfo" >
          <p className='agentRole'>{weapon.category.slice(21)}</p>
          
       </div>
    </div>
  )
}
