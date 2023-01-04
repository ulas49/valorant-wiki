import React,{useContext} from 'react'
import { AppLevelContext } from '../../context/AppLevelContext'
import WeaponItem from './WeaponItem'


export default function WeaponList() {
    const {weapons} = useContext(AppLevelContext)
  return (
    <div className='weaponList'>
    {weapons.map((weapon,idx)=><WeaponItem weapon={weapon} key={idx} /> )}
    </div>
  )
}
