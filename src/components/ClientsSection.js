import React from 'react'

import './ClientsSection.scss'

import clientsJson from '../assets/datas/clientsList.json'

const ClientsSection = () => {
    return (
        <section id="clients-section">
            <h3>Select Clients</h3>
            <ul> 
                {clientsJson.filter(client => client.group === 1).map(client => 
                    <li key={client.id}>{client.name}</li>
                )}
            </ul>
            <ul> 
                {clientsJson.filter(client => client.group === 2).map(client => 
                    <li key={client.id}>{client.name}</li>
                )}
            </ul>
        </section>
    )
}

export default ClientsSection
