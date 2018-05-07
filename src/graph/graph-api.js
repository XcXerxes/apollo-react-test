import gql from 'graphql-tag'
import client from './client'

client.query({
  query: gql`
    {
      rates(currency: "USD") {
        currency
      }
    }
  `
}).then(result => console.log(result))
