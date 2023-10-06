import React from 'react';
import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_CLIENTS } from './queries/clientQueries';

export default function Client({ id }) {
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

 

  return (
    <table className="table table-hover mt-3">
      <tbody>
        {data.clients.map((client) => (
          <ClientRow key={client.id} client={client} />
        ))}
        

         </tbody>
    </table>
  );
}
