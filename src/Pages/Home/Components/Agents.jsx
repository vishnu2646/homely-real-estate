import React from 'react'
import CardHeader from '../../../Components/CardHeader'
import Cards from '../../../Components/Cards'
import { AgentList } from '../../../data/data'

const Agents = () => {
    return (
        <>
            <CardHeader 
                lightContent="Meet Our" 
                strongContent="Agents" 
                content="Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor" 
            />
            <div className="container">
                <div style={{ display: "flex", gap: "20px" }}>
                    {
                        AgentList.map((agent, index) => {
                            return(
                                <Cards 
                                    key={index}
                                    isAgents 
                                    name={agent.name} 
                                    image={agent.image} 
                                    properties={agent.properties} 
                                    agentType={agent.agentType}
                                    agentemail={agent.agentemail}
                                    agentphone={agent.agentphone}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Agents