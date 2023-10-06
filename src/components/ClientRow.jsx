import React from 'react'
import { DELETE_CLIENT } from './mutations/clientMutation'
import { useMutation } from '@apollo/client'
import { GET_CLIENTS } from './queries/clientQueries'

export default function ClientRow({client}) {

 const [deleteClient] = useMutation(DELETE_CLIENT,{
    variables:{id:client.id},
    refetchQueries:[{query:GET_CLIENTS}],
    update(cache,{data:{deleteClient}}) {
     const {clients} = cache.readQuery({query:GET_CLIENTS});
     cache.writeQuery({
        query:GET_CLIENTS,
        data:{clients:clients.filter(client=>client.id!==deleteClient.id),},
     })   
    }
 });

  return (
    <div>
      <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
         <td>
            <button onClick={deleteClient}>Delete</button>
         </td>
      </tr>
    </div>
  )
}
