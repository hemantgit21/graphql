import logo from './logo.svg';
import './App.css';
import {ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client';
import Client from './components/Client';


const cache = new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing,incoming) {
            return incoming;
          },
        },
        projects:{
          merge(existing,incoming) {
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  url:"http://localhost:3000/graphql",
  cache,
})

function App() {
  return (
    <>
    <ApolloProvider client={client} >
      <h1>PROJECT MANAGEMENT </h1>
      <Client/>
      </ApolloProvider>
    </>
  );
}

export default App;
