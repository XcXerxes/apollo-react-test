import React, { Component } from 'react';
import './App.css';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'

class App extends Component {
  render() {
    return (
    <div className="App">
      <Query
        query={gql`
          {
            rates(currency: "AMD") {
              currency
            }
          }
        `}
      >
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error...</p>
          return data.rates.map(({currency, rate}, index) => (
            <div key={index}>
              <p>{`${currency}: ${rate}`}</p>
            </div>
          ))
        }}
      </Query>
      </div>
    );
  }
}

export default App;
