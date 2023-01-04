import React,{useContext} from 'react'
import { AppLevelContext } from '../../context/AppLevelContext'
import AgentItem from './AgentItem'

const AgentList = () => {
    const {agents} = useContext(AppLevelContext)
  return (
    <div className='agentList'>
    {agents.map((agent,idx)=><AgentItem agent={agent} key={idx} /> )}
    </div>

  )
}

export default AgentList