import React from 'react'

const AgentItem = ({agent}) => {
  return (
    <>

      <div className='agentCard'> 
      <div className='agentHeader'>
      <h3>{ agent.displayName}</h3> 
      <p>{ agent.description}</p>
      </div>
       <img src={agent.displayIcon} alt="" />
       <div className="agentInfo" >
          <p className='agentRole'>{agent.role.displayName}</p>
          <div className="agentAbility">
            {agent.abilities.map((ability)=>{
             return <p>{ability.displayName}</p>
            })}
          </div>
       </div>
    </div>
     
    
    </>
    

  )
}

export default AgentItem